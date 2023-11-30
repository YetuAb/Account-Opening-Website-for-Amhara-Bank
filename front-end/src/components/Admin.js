import React, { useEffect, useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import AdminHome from './AdminHome';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const validationSchema = yup.object({
  username: yup.string().required('Enter your Username'),
  password: yup.string().min(4, 'Password must have at least 4 characters').required('Password is required'),
});

function Admin() {
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userData, setUserData] = useState('');
  const [data, setData] = useState([]);
  const [adminData, setAdminData] = useState([]);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = './Form';
  };

  const getAllUser = () => {
    fetch('http://localhost:5000/getAllUser', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userData');
        setData(data.data);
      });
  };

  const getAllAdmin = () => {
    fetch('http://localhost:5000/getAllAdmin', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((adminData) => {
        console.log(adminData, 'adminData');
        setAdminData(adminData.adminData);
      });
  };

  const deleteUser = (idNo, fullName) => {
    if (window.confirm(`Are you sure you want to delete ${fullName}`)) {
      fetch('http://localhost:5000/deleteUser', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          idNo: idNo,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/userData', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          token: window.localStorage.getItem('token'),
        }),
      });
      const user = await response.json();
      console.log(user);
      if (user.data.userType === 'Admin') {
        setAdmin(true);
      }
      setUserData(user.data);
      if (user.data === 'token expired') {
        alert('Token expired login again');
        window.localStorage.removeItem('token');
        window.location.href = './Form';
      } else {
        window.location.href = '/Admin';
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
    getAllUser();
    getAllAdmin();

    const timeout = setTimeout(() => {
      getUserData();
    }, 300000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    (admin ? <AdminHome /> : <AdminHome userData={userData} />
  ) && (
    <Formik
      initialValues={{
        fullName: '',
        phoneNumber: '',
        username: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        axios
          .post('http://localhost:5000/createAdmin', values)
          .then((response) => {
            const data = response.data;
            console.log(data);
            if (data.user) {
              alert(data.message);
            } else {
              alert(data.message);
            }
            actions.setSubmitting(false);
          })
          .catch((error) => {
            if (error.response && error.response.status === 201) {
              // Check for the specific error message
              if (error.response.data.message === 'Failed to register. User already exists') {
                alert('User already exists. Please choose a different username.');
              } else {
                alert(`Failed to register. ${error.response.data.message}`);
              }
              } else {
                alert('Failed to register. Please try again later.');
              }
              actions.setSubmitting(false);
            });
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        isSubmitting,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <>
          <Typography variant="h2" align="center" fontFamily="Helvetica Neue">
            Admin Dashboard
          </Typography>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              onClick={() => setShow(!show)}
              variant="contained"
            >
              {show === true ? '^' : '+'} Add an Admin
            </Button>
            {show && (
              <div
                className="form1"
                style={{
                  marginTop: 35,
                  marginLeft: '30%',
                  marginBottom: 20,
                }}
              >
                <h1>Add an Admin</h1>
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <label>Full Name</label>
                  <br />
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your Full Name"
                    required
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fullName && touched.fullName ? 'error' : ''
                    }
                  />
                  <ErrorMessage
                    name="fullName"
                    style={{ color: 'red', fontSize: 'small' }}
                    className="error-message"
                    component="span"
                  />
                  <label>Phone Number</label>
                  <br />
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter your Phone Number"
                    required
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phoneNumber && touched.phoneNumber ? 'error' : ''
                    }
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    style={{ color: 'red', fontSize: 'small' }}
                    className="error-message"
                    component="span"
                  />
                  <label>Username</label>
                  <br />
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.username && touched.username ? 'error' : ''
                    }
                  />
                  <ErrorMessage
                    name="username"
                    style={{ color: 'red', fontSize: 'small' }}
                    className="error-message"
                    component="span"
                  />
                  <br />
                  <label>Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? 'error' : ''
                    }
                  />
                  <ErrorMessage
                    name="password"
                    style={{ color: 'red', fontSize: 'small' }}
                    className="error-message"
                    component="span"
                  />
                  <br />
                  <div className="login">
                    <button type="submit" disabled={isSubmitting}>
                      Create
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              onClick={() => setShowUser(!showUser)}
              variant="contained"
            >
              {showUser === true ? '^' : '↓'} See Customer Data
            </Button>
            {showUser && (
              <TableContainer
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  marginTop: 5,
                  marginBottom: 16,
                  boxShadow: '0px 0px 5px #ccc',
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: '#1976D2' }}>
                    <TableRow>
                      <TableCell>FullName</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Id No.</TableCell>
                      <TableCell>Id Issued Date</TableCell>
                      <TableCell>Id Expired Date</TableCell>
                      <TableCell>Tel NO.</TableCell>
                      <TableCell>Nationality</TableCell>
                      <TableCell>Account Number</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((i) => (
                      <TableRow key={i.idNo}>
                        <TableCell>{i.fullName}</TableCell>
                        <TableCell>{i.gender}</TableCell>
                        <TableCell>{i.idNo}</TableCell>
                        <TableCell>{i.idIssued}</TableCell>
                        <TableCell>{i.expiredDate}</TableCell>
                        <TableCell>{i.telNo}</TableCell>
                        <TableCell>{i.nationality}</TableCell>
                        <TableCell>{i.abaAccountNumber}</TableCell>
                        <TableCell>
                          <PersonRemoveIcon
                            onClick={() =>
                              deleteUser(
                                i.idNo,
                                i.fullName,
                                i.gender,
                                i.idIssued,
                                i.expiredDate,
                                i.nationality,
                                i.telNo,
                                i.abaAccountNumber
                              )
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              onClick={() => setShowAdmin(!showAdmin)}
              variant="contained"
            >
              {showAdmin === true ? '^' : '↓'} See Admin Data
            </Button>
            {showAdmin && (
              <TableContainer
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  marginBottom: 16,
                  marginTop: 5,
                  boxShadow: '0px 0px 5px #ccc',
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: '#1976D2' }}>
                    <TableRow>
                      <TableCell>FullName</TableCell>
                      <TableCell>Phone NO.</TableCell>
                      <TableCell>Username</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {adminData.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>{a.fullName}</TableCell>
                        <TableCell>{a.phoneNumber}</TableCell>
                        <TableCell>{a.username}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <div>
            <Button
              onClick={logOut}
              sx={{
                marginRight: 3,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              variant="contained"
            >
              Log Out
            </Button>
          </div>
        </>
      )}
    </Formik>
  )
  );
}

export default Admin;
