import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import axios from 'axios';
import "./MultiStep.css";

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [error, setError] = useState([]);

  const axiosPostData = async () => {
    const postData = {
      initialValues: snapshot,
      base64: snapshot.image
    };
    console.log(postData);
    try {
      const res = await axios.post('http://localhost:5000/account', postData);
      setError(<p className='success'>{res.data}</p>);
    } catch (error) {
      console.error(error);
      setError(<p className='error'>{error.response.data.error}</p>);
    }
  };

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    console.log(stepNumber);
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, actions) => {
    try {
      setError('');
      if (step.props.onSubmit) {
        await step.props.onSubmit(values, actions);
      }

      if (isLastStep) {
        await onSubmit(values, actions);
        await axiosPostData();
        setError(<p style={{ color: 'green' }} className='success'>Successfully registered. Thank you.</p>);
      } else {
        actions.setTouched({});
        next(values);
      }
    } catch (error) {
      console.error(error);
      setError(<p className='error'>{error.response.data.error}</p>);
    }
  };

  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form>
            <Stepper activeStep={stepNumber} alternativeLabel sx={{ position: 'absolute', top: '12%', left: 0, right: 0 }}>
              {steps.map(currentStep => {
                const label = currentStep.props.stepName;
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <br /><br />
            {step}
            <div style={{
              display: 'flex',
              marginTop: 50,
              marginLeft: 200,
              marginRight: 200,
              justifyContent: 'space-between',
            }}>
              {stepNumber > 0 && (
                <Button onClick={() => previous(formik.values)} variant="contained" type="button">
                  Back
                </Button>
              )}
              <Button disabled={formik.isSubmitting} type="submit" color="primary" variant="contained">
                {isLastStep ? 'Submit' : 'Next'}
              </Button>
              {error}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;

export const FormStep = ({ stepName = '', children }) => children;
