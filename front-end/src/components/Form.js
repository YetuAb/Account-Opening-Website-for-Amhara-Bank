import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './Form.css';
import Navbar from './Navbar';
import axios from 'axios';
import FooterP from './Footer';

const validationSchema = yup.object({
  username: yup.string().required('Enter your Username'),
  password: yup.string().min(4, 'Password must have at least 4 characters').required('Password is required'),
});

const Form = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/adminSignIn', values);
      if (response.data.isVerified) {
        window.localStorage.setItem('token', response.data.message);
        window.localStorage.setItem('loggedIn', true);

        window.location.href = '/Admin';
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, isSubmitting, touched, handleChange, handleBlur, handleSubmit }) => (
          <>
            <div>
              <Navbar />
            </div>
            <div className='form'>
              <h1>Login Into ABA</h1>
              <form autoComplete='off' onSubmit={handleSubmit}>
                <label>Username</label>
                <br />
                <input
                  id='username'
                  type='text'
                  placeholder='Enter your username'
                  required
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.username && touched.username ? 'error' : ''}
                />
                <ErrorMessage name='username' style={{ color: 'red', fontSize: 'small' }} className='error-message' component='span' />
                <br />
                <label>Password</label>
                <input
                  id='password'
                  type='password'
                  placeholder='Enter your Password'
                  required
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password ? 'error' : ''}
                />
                <ErrorMessage name='password' style={{ color: 'red', fontSize: 'small' }} className='error-message' component='span' />
                <br />
                <div className='login'>
                  <button type='submit' disabled={isSubmitting}>
                    Login
                  </button>
                </div>
                <div className='forgot'>
                  <a href='#'>Forgot password?</a>
                </div>
              </form>
            </div>
          </>
        )}
      </Formik>
      <FooterP />
    </>
  );
};

export default Form;
