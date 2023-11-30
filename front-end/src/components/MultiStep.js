import React, { useState } from 'react'
import "./MultiStep.css"
import "./Form.css"
import MultiStepForm, { FormStep } from './MultiStepForm';
import * as yup from 'yup'
import { FormControl, Box, Select, InputLabel, MenuItem, Checkbox,  FormHelperText, Radio, FormControlLabel, RadioGroup, FormLabel, Grid, Container, CssBaseline, Button } from '@mui/material';
import InputField from './InputField';
import Footer from './Footer'
import { ErrorMessage, Field,} from 'formik';



const validationSchema = yup.object({
  fullName: yup.string().required('Required information'),
  childrenNo: yup.number(),
  nationality: yup.string().required('Required information'),
  permitNo: yup.number(),
  date: yup.date().required('Required information'),
  gender: yup.string().oneOf(["male","female"]).required('Required information'),
  dependents: yup.number(),
  motherName: yup.string().required('Required information'),
  maritalStatus: yup.string().oneOf(["single", "married", "other"]),
})

export default function MultiStep() {
  
  const [show, setShow] = useState(false);
  const [showf, setShowf] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedFreeValue, setSelectedFreeValue] = useState('');
  const [activeBtn, setActiveBtn] = useState(null);
  
  const handleBtnClick = (btnNumber) => {
    if (btnNumber === activeBtn) {
      setActiveBtn(null);
    } else {
      setActiveBtn(btnNumber);
    }
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setSelectedFreeValue(event.target.value);
  };

  return (
    <div className="MultiStep"
      style={{
      display: 'block',
      }}>
      
      <MultiStepForm 
        
        initialValues={{
          title: '',      country:'',   expiredDate:'',       other :'',          kinRelationship:'',   banks:'',             interpreterName:'',
          email: '',      region:'',    chequeAmount:'',      employment:'',      kinHouseNo:'',        accountName:'',       interpreterAddress:'',
          fullName:'',    city:'',      identification:'',    monthlyIncome:'',   kinTitle:'',          accountNumber:'',     interpreterTel:'',
          birthPlace:'',  subCity:'',   others:'',            specify:'',         kinCity:'',           accountStatus:'',     agreed:false,
          childrenNo:'',  kebele:'',    idNo:'',              annualIncome:'',    kinCountry:'',        language:'',          thirdParty:false,
          nationality:'', hNo:'',       idIssued:'',          employer:'',        kinDate:'',           initialDeposit:'',    test:'',
          permitNo:'',    telNo:'',     cardType:'',          profession:'',      kinEmail:'',          advertisement:'',     interestBearingOption:"",
          date:'',        homeType:'',  electronicBanking:'', positionHeld:'',    kinFullName:'',       
          purpose:'',     poBox:'',     transactionAlert:'',                      kinGender:'',         wadiah:'',             joint:'false',
          gender:'',      interestFree:"", interestBearing:"",statement:'',       fixed:'false',                            kinHNo:'',            amanah:'',     
          dependents:'',  image: null,  chequeCategory:'',                        kinKebele:'',         mudarabah:'',        
          motherName:'',                statementDuration:'',                                          kinRegion:'',         fyc:'',
          maritalStatus:'',                                                       kinSubCity:'',        currency:'',
                                                                                  kinTelNo:'',          otherType:'',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}
        onChange={handleChange}
      >
      
      <FormStep
        color="primary"
        stepName="Account Type"
        showIcon
        onSubmit={() => console.log('step0')}
        validationSchema={yup.object({})}>
        <Grid container={true} spacing={1} marginTop={10}>       
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ border: '2px solid #ffce03', bgcolor: '#faf8e4',
                    borderRadius: 4,boxShadow: '0px 0px 5px #ccc',
                    marginTop:5,
                    }}>
            <Grid   item alignItems="stretch" justifyContent="space-between" style={{ display: "flex" }}>
              <div id="free" className="free" >
                <Button 
                  sx={{marginRight: 4, marginTop:1, marginLeft:1, height:50 }}
                  onClick={() => {setShow(!show); handleBtnClick(1);}} 
                  variant='contained'
                  disabled={activeBtn === 2}>
                  {show ===true ? 'Hide' : 'Show'} Interest Free Account
                </Button>
                <FormHelperText sx={{marginLeft:1}} ><p>Click and select one account type, if you want an Interest Free Account.</p></FormHelperText>
                {show && 
                  <> 
                    <FormControl component="fieldset" variant="standard" sx={{ m: 1, minWidth: 200, }}>
                      <FormLabel component="legend">Interest Free Accounts:</FormLabel>
                      <RadioGroup aria-label="interestBearingOption" name="interestBearingOption" value={selectedValue} onChange={handleChange} required>
                        <div>
                          <FormControlLabel value="wadiah" name="interestBearingOption" control={<Radio />} label="Wadiah Safekeeping" />
                          <FormControlLabel value="amanah" name="interestBearingOption" control={<Radio />} label="Amanah Current" /></div><div>
                          <FormControlLabel value="mudarabah" name="interestBearingOption" control={<Radio />} label="Mudarabah Saving" />
                          <FormControlLabel value="fyc" name="interestBearingOption" control={<Radio />} label="FYC Account" />
                        </div>
                      </RadioGroup>
                      <FormHelperText><ErrorMessage name="interestBearingOption"/></FormHelperText>
                    </FormControl>
                    <Grid>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} disabled={!selectedValue.includes('wadiah')}>
                        <InputLabel id="wadiah">Wadiah SafeKeeping</InputLabel>
                        <Field as={Select} name="wadiah">
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="ordinary" control={<Select/>}>Ordinary</MenuItem>
                          <MenuItem value="women" control={<Select/>}>Women</MenuItem>
                          <MenuItem value="youth" control={<Select/>}>Youth</MenuItem>
                          <MenuItem value="teenYouth" control={<Select/>}>Teen Youth</MenuItem>
                          <MenuItem value="educational" control={<Select/>}>Educational</MenuItem>
                          <MenuItem value="zakat" control={<Select/>}>Zakat</MenuItem>
                          <MenuItem value="nikah" control={<Select/>}>Nikah</MenuItem>
                          <MenuItem value="labbaik" control={<Select/>}>Labbaik</MenuItem>
                          <MenuItem value="other" control={<Select/>}>Other</MenuItem>
                        </Field>
                      </FormControl>

                      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} disabled={!selectedValue.includes('amanah')}>
                        <InputLabel id="amanah">Amanah Current</InputLabel>
                        <Field as={Select} name="amanah" >
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="cheque">Cheque Account</MenuItem>
                          <MenuItem value="excAccount">EXC Account</MenuItem>
                        </Field>
                      </FormControl>

                      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} disabled={!selectedValue.includes('mudarabah')}>
                        <InputLabel id="mudarabah">Mudarabah Saving</InputLabel>
                        <Field as={Select} name="mudarabah" >
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="ordinary">Ordinary</MenuItem>
                          <MenuItem value="women">Women</MenuItem>
                          <MenuItem value="youth">Youth</MenuItem>
                          <MenuItem value="teenYouth">Teen Youth</MenuItem>
                          <MenuItem value="educational">Educational</MenuItem>
                          <MenuItem value="zakat">Zakat</MenuItem>
                          <MenuItem value="nikah">Nikah</MenuItem>
                          <MenuItem value="labbaik">Labbaik</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Field>
                      </FormControl>

                      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} disabled={!selectedValue.includes('fyc')}>
                        <InputLabel id="fyc">FYC Account</InputLabel>
                        <Field as={Select} name="fyc" >
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="amanahCheque">Amanah Cheque</MenuItem>
                          <MenuItem value="wadiahSaving">Wadiah Saving</MenuItem>
                          <MenuItem value="wadiahDiaspora">Wadiah Diaspora Mortgage</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>
                  </>
                }
              </div>

              <div>
                <Button 
                  sx={{marginRight: 4, marginTop:1, marginLeft:1, height:50}}
                  onClick={() => {setShowf(!showf); handleBtnClick(2)}} 
                  variant='contained' 
                  disabled={activeBtn === 1}>{showf ===true ? 'Hide' : 'Show' } Interest Bearing Account
                </Button>
                <FormHelperText sx={{marginLeft:1}}><p>Click and select one account type, if you want an Interest bearing Account.</p></FormHelperText>
                {showf && 
                  <>
                    <FormControl component="fieldset" variant="standard" sx={{ m: 1, minWidth: 200, }}>
                      <FormLabel component="legend">Interest Free Accounts:</FormLabel>
                      <RadioGroup aria-label="interestFreeOption" name="interestFreeOption" value={selectedFreeValue} onChange={handleChange} required>
                        <div>
                          <FormControlLabel value="fixedTime" name="interestFreeOption" control={<Radio />} label="Fixed Time Deposit" />
                          <FormControlLabel value="savingAccount" name="interestFreeOption" control={<Radio />} label="Saving Account" />
                        </div>
                      </RadioGroup>
                      <FormHelperText><ErrorMessage name="interestFreeOption"/></FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} disabled={!selectedFreeValue.includes('fixedTime')}>
                      <InputLabel id="fixedTime"> Fixed Time Deposit</InputLabel>
                      <Field as={Select} name="fixedTime" >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="ordinary">Ordinary</MenuItem>
                        <MenuItem value="women">Women</MenuItem>
                        <MenuItem value="youth">Youth</MenuItem>
                        <MenuItem value="teenYouth">Teen Youth</MenuItem>
                        <MenuItem value="educational">Educational</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Field>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} disabled={!selectedFreeValue.includes('savingAccount')}>
                      <InputLabel id="savingAccount"> Saving Account</InputLabel>
                      <Field as={Select} name="savingAccount" >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="ordinary">Ordinary</MenuItem>
                        <MenuItem value="women">Women</MenuItem>
                        <MenuItem value="youth">Youth</MenuItem>
                        <MenuItem value="teenYouth">Teen Youth</MenuItem>
                        <MenuItem value="educational">Educational</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Field>
                    </FormControl>
                  </>
                }
              </div>
        
              <div style={{marginRight:2}}>
                <FormControlLabel name="joint" value="joint" control={< Field as={Checkbox} name="joint" sx={{ marginLeft:1}}/>} label={'Joint Account'}/>
                <FormControlLabel name="fixed" value="fixed" control={< Field as={Checkbox} name="fixed"/>} label={'Fixed Account'}/>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 300,  }}>
                  <InputLabel id="currency">Currency</InputLabel>
                  <Field as={Select} name="currency" >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="birr">Birr</MenuItem>
                    <MenuItem value="dollar">$</MenuItem>
                    <MenuItem value="pound">£</MenuItem>
                    <MenuItem value="euro">€</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Field>
                </FormControl>
                <InputField sx={{marginRight: 3, marginTop:2, marginLeft:2, maxWidth: 300}}  name="otherType" type="text" label="Other type of account"/>
              </div>
            </Grid>
          </Box>
        </Container>
        </React.Fragment>
        </Grid>      
      </FormStep>
     
      <FormStep 
        stepName="Personal Information"   
        onSubmit={() => console.log('step1')}
        validationSchema={validationSchema}
        >
        <Grid container={true} spacing={2} marginTop={10} >
          <React.Fragment>
            <CssBaseline />
            <Container fixed >
              <Box sx={{ bgcolor: '#faf8e4', height: 350, width:950, marginLeft:13, border: '2px solid #ffce03',
                    borderRadius: 4,
                    marginTop:3,
                    boxShadow: '0px 0px 5px #ccc' }}>
                <Grid   item alignItems="stretch" style={{ display: "flex" }}>
                  <div>
                    <InputField name="title" label="Title"  />
                    <InputField name="fullName" label="Full Name"/>
                    <InputField name="birthPlace" label="Place of Birth"/>
                    <InputField type="number" name="childrenNo" label="Number Of Children"/>
                  </div>
                  <div>
                    <InputField type="number" name="dependents" label="Number of Dependents"/>
                    <InputField name="motherName" label="Mother's Name"/>
                    <InputField name="nationality" label="Nationality"/>
                    <InputField type="number" name="permitNo" label="Resident Permit no."/>
                  </div>
                  <div>
                    <InputField type="date" name="date" label="Date of Birth"/>
                    <InputField name="purpose" label="Purpose of Account"/>
                    <FormControl  variant="standard" sx={{ m: 1, minWidth: 300, marginBottom: 4,  }}>
                      <InputLabel id="maritalStatus">Marital Status</InputLabel>
                      <Field as={Select} name="maritalStatus" >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="single" control={<Select/>}>Single</MenuItem>
                        <MenuItem value="married">Married</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Field>
                    </FormControl>
                    <FormControl component="fieldset" >
                      <FormLabel component="gender">Gender</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="gender"
                        name="gender"
                        style={{display: 'initial'}}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                      </Field>
                      <FormHelperText><ErrorMessage name="gender"/></FormHelperText>
                    </FormControl>
                  </div>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>

      <FormStep
        stepName="Address"
        onSubmit={() => console.log('step2')}
        validationSchema={yup.object({
          country: yup.string().required('Required information'),
          region: yup.string().required('Required information'),
          city: yup.string().required('Required information'),
          subCity: yup.string().required('Required information'),
          kebele: yup.number().required('Required information'),
          hNo: yup.number(),
          telNo: yup.number().required('Required information'),
          email: yup.string().email(),
          })}>
        <Grid container={true} spacing={1} marginTop={10}>
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#faf8e4', 
                height: 350, 
                width: 960, 
                marginLeft:13, 
                border: '2px solid #ffce03',
                borderRadius: 4,
                marginTop:3,
                boxShadow: '0px 0px 5px #ccc',  }}>
                <Grid container={true} spacing={1} marginLeft={0.5} marginTop={0.5}>
                  <div>
                    <InputField name="country" label="Country"/>
                    <InputField name="region" label="Region"/>
                    <InputField name="city" label="City"/>
                  </div>
                  <div>
                    <InputField name="subCity" label="Sub-City"/>
                    <InputField name="kebele" label="Kebele/Wereda"/>
                    <InputField name="hNo" label="H. No."/>
                  </div>
                  <div>
                    <InputField name="telNo" label="Tel. No."/>
                    <InputField name="email" label="Email"/>
                    <InputField name="poBox" label="P.O.Box"/>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="homeType">HomeType </InputLabel>
                      <Field as={Select} name="homeType" >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="rented">Rented</MenuItem>
                        <MenuItem value="selfOwned">Self Owned</MenuItem>
                        <MenuItem value="companyProvided">Company Provided</MenuItem>
                        <MenuItem value="mortgage">Mortgage</MenuItem>
                        <MenuItem value="withParents">Living with Parents</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                      </Field>
                    </FormControl>
                  </div>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>
     
      <FormStep
        stepName="Means of Identification"
        onSubmit={() => console.log('step3')}
        validationSchema={yup.object({
          expiredDate: yup.date().required('Required information'),
          idNo: yup.number().required('Required information'),
          idIssued: yup.date().required('Required information'),
          })}>

        <Grid container={true} spacing={1} marginTop={10}>       
          <React.Fragment>
            <CssBaseline />
            <Container absolute>
              <Box sx={{ bgcolor: '#faf8e4', height: 360, width: 810, marginLeft:23,border: '2px solid #ffce03',
                borderRadius: 4,
                marginTop:3,
                boxShadow: '0px 0px 5px #ccc', display: "flex"   }}>
                <Grid   item alignItems="stretch" style={{ display: "flex" }}>
                  <div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="identification">Id </InputLabel>
                      <Field as={Select} name="identification" >
                        <MenuItem value="nationalId">National Id Card</MenuItem>
                        <MenuItem value="license">Driver's License</MenuItem>
                        <MenuItem value="passport">Passport</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                      </Field>
                      <FormHelperText><ErrorMessage name="identification"/></FormHelperText>
                    </FormControl>
                    <InputField name="idNo" type="number" label="ID No."/>
                    <InputField name="idIssued" type="date" label="ID Issue Date"/>
                    <InputField name="expiredDate" type="date" label="ID Expire Date"/>
                  </div>
                  <div>
                    <FormControl component="fieldset" >
                      <FormLabel component="legend">Card Type</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="cardType"
                        name="cardType"
                        style={{display: 'initial'}}>
                        <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
                        <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                      </Field>
                      <FormHelperText><ErrorMessage name="cardType"/></FormHelperText>
                    </FormControl>
                    <FormControl component="fieldset" >
                      <FormLabel component="legend">Electronic Banking Preference</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="electronicBanking"
                        name="electronicBanking"
                        style={{display: 'initial'}}>
                        <FormControlLabel value="mobileBanking" control={<Radio />} label="Mobile Banking" />
                        <FormControlLabel value="internetBanking" control={<Radio />} label="Internet Banking" />
                      </Field>
                      <FormHelperText><ErrorMessage name="electronicBanking"/></FormHelperText>
                    </FormControl>
                    <FormControl component="fieldset" >
                      <FormLabel component="legend">Transaction Alert</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="transactionAlert"
                        name="transactionAlert"
                        style={{display: 'initial'}}>
                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                        <FormControlLabel value="sms" control={<Radio />} label="SMS" />
                      </Field>
                      <FormHelperText><ErrorMessage name="transactionAlert"/></FormHelperText>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl component="fieldset" >
                      <FormLabel component="legend">Statement Preference</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="statement"
                        name="statement"
                        style={{display: 'initial'}}>
                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                        <FormControlLabel value="branchRequest" control={<Radio />} label="On Request at Branch" />

                      </Field>
                      <FormHelperText><ErrorMessage name="statement"/></FormHelperText>
                    </FormControl>  

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="statementDuration">Statement Duration </InputLabel>
                      <Field as={Select} name="statementDuration" >
                        <MenuItem value="monthly">Monthly</MenuItem>
                        <MenuItem value="quarterly">Quarterly</MenuItem>
                        <MenuItem value="semiAnnually">SemiAnnually</MenuItem>
                        <MenuItem value="annually">Annually</MenuItem>
                      </Field>
                      <FormHelperText><ErrorMessage name="statement"/></FormHelperText>
                    </FormControl>

                    <FormControl component="fieldset" >
                      <FormLabel component="legend">Cheque Category</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="chequeCategory"
                        name="chequeCategory"
                        style={{display: 'initial'}}>
                        <FormControlLabel value="25" control={<Radio />} label="25 Leaves" />
                        <FormControlLabel value="50" control={<Radio />} label="50 Leaves" />
                        <FormControlLabel value="100" control={<Radio />} label="100 Leaves" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </Field>
                      <FormHelperText><ErrorMessage name="chequeCategory"/></FormHelperText>
                    </FormControl>
                    <InputField name="chequeAmount" type="number" label="Pre confirm cheque amount greater than"/>
                  </div>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>
      
      <FormStep
        stepName="Employment Details"
        onSubmit={() => console.log('step4')}
        validationSchema={yup.object({
          specify: yup.number().min(200000, 'Number must be greater than 200000'),
          })}>
        <Grid container={true} spacing={1} marginTop={10}>       
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#faf8e4', height: 350, width: 800, marginLeft:23, border: '2px solid #ffce03',
                borderRadius: 4,
                marginTop:3,
                boxShadow: '0px 0px 5px #ccc',  }}>
                <Grid   item alignItems="stretch" style={{ display: "flex" }}>
                  <div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="employment">Employment Details</InputLabel>
                      <Field as={Select} name="employment" >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="government">Government Sector Employee</MenuItem>
                        <MenuItem value="private">Private Sector Employee</MenuItem>
                        <MenuItem value="selfEmployed">Self Employed</MenuItem>
                        <MenuItem value="international">International Organization</MenuItem>
                        <MenuItem value="ngo">NGO</MenuItem>
                        <MenuItem value="diplomat">Diplomat</MenuItem>
                        <MenuItem value="religious">Religious</MenuItem>
                        <MenuItem value="houseWife">House Wife</MenuItem>
                        <MenuItem value="retired">Retired</MenuItem>
                        <MenuItem value="unemployed">Unemployed</MenuItem>
                        <MenuItem value="student">Student</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Field>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="monthlyIncome">Monthly Income</InputLabel>
                      <Field as={Select} name="monthlyIncome" >
                        <MenuItem value="2000">2000 Birr</MenuItem>
                        <MenuItem value="2001-25000">2001-25000 Birr</MenuItem>
                        <MenuItem value="25001-50000">25001-50000 Birr</MenuItem>
                        <MenuItem value="50001-100000">50001-100000 Birr</MenuItem>
                        <MenuItem value="100001-150000">100001-150000 Birr</MenuItem>
                        <MenuItem value="150001-200000">150001-200000 Birr</MenuItem>
                      </Field>
                      <FormHelperText><ErrorMessage name="monthlyIncome"/></FormHelperText>
                    </FormControl>

                    <InputField name="specify" type="number" label="If greater than 200000 please specify"/>
                    <InputField name="annualIncome" type="number" label="Average Annual Income"/>
                  </div>
                  <div>
                    <InputField name="employer" type="text" label="Name of Employer"/>
                    <InputField name="profession" type="text" label="Profession"/>
                    <InputField name="positionHeld" type="text" label="Position Held"/>
                  </div>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>
     
      <FormStep
        stepName="Details of Next Kin"
        onSubmit={() => console.log('step5')}
        validationSchema={yup.object({})}>
        <Grid container={true} spacing={1} marginTop={5.5}>       
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#faf8e4', height: 400, width: 950, marginLeft:13, border: '2px solid #ffce03',
                borderRadius: 4,
                marginTop:3,
                boxShadow: '0px 0px 5px #ccc',  }}>
                <Grid   item alignItems="stretch" style={{ display: "flex" }}>
                  <div>
                    <InputField name="kinTitle" label="Title"/>
                    <InputField name="kinFullName" label="Full Name"/>
                    <InputField name="kinDate" type="date" label="Date of Birth"/>
                    <FormControl component="fieldset" >
                      <FormLabel component="legend" sx={{marginLeft: 1}}>Gender</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="kinGender"
                        name="kinGender"
                        style={{display: 'initial', marginLeft:7}}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                      </Field>
                      <FormHelperText><ErrorMessage name="kinGender"/></FormHelperText>
                    </FormControl>
                    <InputField name="kinRelationship" label="Relationship"/>
                  </div>
                  <div>
                    <InputField name="kinTelNo" type="number" label="Tel. No."/>
                    <InputField name="kinHouseNo" type="number" label="House No."/>
                    <InputField name="kinEmail" label="Email"/>
                    <InputField name="kinCountry" label="Country"/>  
                    <InputField name="kinRegion" label="Region"/>
                  </div>
                  <div>
                    <InputField name="kinCity" label="City"/>
                    <InputField name="kinSubCity" label="Sub-City"/>
                    <InputField name="kinKebele" type="number" label="Kebele/Wereda"/>
                    <InputField name="kinHNo" type="number" label="H. No."/>
                  </div>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>
      
      <FormStep
        stepName="Accounts Held With Other Banks"
        onSubmit={() => console.log('step6')}
        validationSchema={yup.object({
            })}>
        <Grid container={true} spacing={1} marginTop={10}>       
          <React.Fragment>
            <CssBaseline/>
            <Container fixed>
              <Box sx={{ bgcolor: '#faf8e4', height: 350, width: 800, marginLeft:23, border: '2px solid #ffce03',
                borderRadius: 4,
                marginTop:3,
                boxShadow: '0px 0px 5px #ccc',  }}>
                <Grid   item alignItems="stretch" style={{ display: "flex" }}>
                  <div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300, marginLeft:2 }}>
                      <InputLabel id="banks">Banks</InputLabel>
                      <Field as={Select} name="banks" >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="abay">Abay Bank</MenuItem>
                        <MenuItem value="addis">Addis International Bank</MenuItem>
                        <MenuItem value="amhara">Amhara Bank</MenuItem>
                        <MenuItem value="awash">Awash International Bank</MenuItem>
                        <MenuItem value="abyssinia">Bank of Abyssinia </MenuItem>
                        <MenuItem value="berhan">Berhan International Bank</MenuItem>
                        <MenuItem value="bunna">Bunna International Bank</MenuItem>
                        <MenuItem value="commericial">Commercial Bank of Ethiopia</MenuItem>
                        <MenuItem value="coop">Cooperative Bank of Oromia</MenuItem>
                        <MenuItem value="dashen">Dashen Bank</MenuItem>
                        <MenuItem value="debub">Debub Global Bank</MenuItem>
                        <MenuItem value="enat">Enat Bank</MenuItem>
                        <MenuItem value="lion">Lion International Bank</MenuItem>
                        <MenuItem value="oromia">Oromia International Bank</MenuItem>
                        <MenuItem value="hibret">Hibret Bank</MenuItem>
                        <MenuItem value="wegagen">Wegagen Bank</MenuItem>
                        <MenuItem value="zemen">Zemen Bank</MenuItem>
                        <MenuItem value="zamzam">ZamZam Bank</MenuItem>
                        <MenuItem value="hijra">Hijra Bank </MenuItem>
                        <MenuItem value="siinqee">Siinqee Bank</MenuItem>
                        <MenuItem value="ahadu">Ahadu Bank</MenuItem>
                        <MenuItem value="goh">Goh Betoch Bank SC</MenuItem>
                        <MenuItem value="tsedey">Tsedey Bank</MenuItem>
                      </Field>
                    </FormControl>
                    <InputField name="accountName" sx={{marginLeft:3, minWidth: 300}} type="text" label="Account Name"/>
                    <InputField name="accountNumber" sx={{marginLeft:3, minWidth: 300}} type="text" label="Account Number"/>
                    <FormControl component="fieldset" >
                      <FormLabel component="legend" sx={{marginLeft: 2, minWidth: 300, }}>Status of Account</FormLabel>
                      <Field as = {RadioGroup}
                        aria-label="accountStatus"
                        name="accountStatus"
                        style={{display: 'initial', marginLeft:14}}>
                        <FormControlLabel value="active" control={<Radio />} label="Active" />
                        <FormControlLabel value="dormant" control={<Radio />} label="Dormant" />
                      </Field>
                      <FormHelperText><ErrorMessage name="accountStatus"/></FormHelperText>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300, marginRight:2 }}>
                      <InputLabel id="language">Language</InputLabel>
                      <Field as={Select} name="language" >
                        <MenuItem value="amharic">Amharic</MenuItem>
                        <MenuItem value="oromo">Afan Oromo</MenuItem>
                        <MenuItem value="tigrigna">Tigrigna</MenuItem>
                        <MenuItem value="somaligna">Somaligna</MenuItem>
                        <MenuItem value="english">English</MenuItem>
                      </Field>
                    </FormControl>
      
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="advertisment">How did you hear about the bank</InputLabel>
                      <Field as={Select} name="advertisment" >
                        <MenuItem value="tv">Tv Advertisement</MenuItem>
                        <MenuItem value="newspaper">Newspaper Advertisement</MenuItem>
                        <MenuItem value="customer">Customer Referral</MenuItem>
                        <MenuItem value="radio">Radio Advertisement</MenuItem>
                        <MenuItem value="customerPersonnel">Customer Relationship Personnel</MenuItem>
                      </Field>
                    </FormControl>
                  </div>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>
      
      <FormStep
        stepName="Third Party Form"
        onSubmit={() => console.log('step7')}
        validationSchema={yup.object({})}>
        <Grid container={true} spacing={1} marginTop={10}>       
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#faf8e4', height: 350, width: 800, marginLeft:23, border: '2px solid #ffce03',
                borderRadius: 4,
                marginTop:3,
                boxShadow: '0px 0px 5px #ccc',}}>
                <Grid   item alignItems="stretch" style={{ display: "flex" }}>
                  <label style={{alignContent:'center', marginLeft:100}}>Filled By Applicant's That Can't Read and See With The Help Of A Third Party</label>
                </Grid>
                <Grid container={true} spacing={1} marginTop={7}>
                  <FormControlLabel name="thirdParty" sx={{marginLeft:3}} control={< Field as={Checkbox} name="agreed"/>} label={'I agree to abide by the content of this agreement and acknowledge that it has been truly and audibly read over and explained to me by an interpreter'}/>
                  <InputField name="interpreterName" sx={{marginLeft:3}} type="text" label="Interpreter Name"/>
                  <InputField name="interpreterAddress" sx={{marginLeft:3}} type="text" label="Interpreter Address"/>
                  <InputField name="interpreterTelNo" sx={{marginLeft:3}} type="text" label="Telephone Number"/>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>
        
      <FormStep
        stepName="Terms and Conditions"
        onSubmit={() => console.log('step8')}
        validationSchema={yup.object().shape({
          agreed: yup.bool().oneOf([true]).required('You must accept the terms and conditions'),
          })}>
        <Grid container={true} spacing={1} marginTop={10}>       
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#faf8e4', height: 350, width: 900, marginLeft:23, border: '2px solid #ffce03',
                borderRadius: 4,
                marginTop:3,
                boxShadow: '0px 0px 5px #ccc', overflow:"scroll"  }}>
                <Grid   item alignItems="stretch" style={{ display: "flex" }} marginLeft={1}>
                  <div className="ten columns terms" style={{fontFamily: "Helvetica Neue", color:"#025AA2"}}>
                    <ol>
                      <h4><li>General Instruction</li></h4>
                      <ol className="docs-terms">
                        <li>It is agreed that all transactions between the Bank and undersigned shall be governed by the rules and regulations of the savings account section which are printed on the inside cover of the passbook and subject to all changes therein or additions thereto which shall have been posted in the main office as well as branch's for eight consecutive days.</li>
                        <li>The Bank has the authority to debit the accounts of the account holder to recover any amount paid to the account holder erroneously.</li>
                        <li>In case of a loss of Passbook, Cheque Book, an ATM card, PIN or any account related information the account holder shall immediately notify the Bank. If the account holder falls to do so, the bank shall not liable for any damage.</li>
                      </ol>
                      <h4><li>Opening Savings Accounts for Blind/Non-Literate Persons agreement</li></h4>
                      <ol>
                        <li>You are authorized to recognize any of the signatures subscribed on the face of this signature card in the payment of funds of the transaction of any business for this account. It is agreed that all transactions between the Bank and the undersigned shall be governed by the rules and regulations of the Savings Account Department which are printed on the inside cover of the passbook and are subject to all changes therein or additions thereto, which shall have been posted in the Head Office of the Bank for eight consecutive days.</li>
                        <li>The blind/illiterate person is well convinced that her or his thumb mark should be put in the presence of the notary/judge/registrar, as the case may be for the law so requires.</li>
                        <li>In the sole discretion of the Bank, the terms and conditions stated herein above under number 2(two) may be left out and replaced by two witnesses in the opening of the account and withdrawal from the account. The witnesses shall be one from the customer side and one bank officer. However, in case no witness presented by the customer side the two witness shall be from the bank one shall be the Business Manager or the Branch Manager.</li>
                        <li>If the account has no movement for one year in the case of saving and six months for demand deposit account it will be considered as dormant and will be transferred to Inactive Account.</li>
                        <li>When there is a discrepancy between the saving passbook and the computer system of the bank the record on the system shall prevail.</li>
                        <li>It is legally prohibited to write a cheque without sufficient fund.</li>
                        <li>The account shall be operated strictly in line with the National Bank of Ethiopia directives</li>
                      </ol>
                    </ol>
                    <FormControlLabel name="agreed" control={< Field as={Checkbox} required name="agreed"/>} label={'Agree to the Terms and Conditions'}/>
                  </div>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </FormStep>
    </MultiStepForm>
    <Footer/>
  </div>
  )
}
