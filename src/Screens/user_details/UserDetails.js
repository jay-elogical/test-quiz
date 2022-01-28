import './userDetails.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';

function UserDetails() {

  const [fetchedUserId, setFetchedUserId] = useState(0);
  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [hasUserAttemptedTest, setHasUserAttemptedTest] = useState(false);
  const [registeration_msg, setRegisterationMsg] = useState('');
  const [startTest_msg, setStartTestMsg ] = useState(''); 

  const setstateDefaults = () => {
    setRegisterationMsg('');
    setStartTestMsg('');
    setIsUserRegistered(false);
    setHasUserAttemptedTest(false);
  }
  
  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
    setstateDefaults();
  }
  const userEmailChangeHandler = (e) => {
    setUserEmail(e.target.value);
    setstateDefaults();
  }



  const registerUser = () => {
    setIsUserRegistered(false);
    user_name && user_email && axios.get('http://localhost:3000/usersData')
      .then(response => {
        let fetchedData = [];
        fetchedData = response.data.filter(userObj => userObj.name === user_name && userObj.email === user_email)
        if (fetchedData.length > 0) {
          setFetchedUserId(fetchedData[0].id)
          setIsUserRegistered(true);
          let isTestAttempted = fetchedData[0].isTestAttempted;
          setHasUserAttemptedTest(isTestAttempted);
          setRegisterationMsg('Registeration already done.')
        }
        else {
          postUserData();
          setIsUserRegistered(false);
          setHasUserAttemptedTest(false);
          setRegisterationMsg('Registeration Successful..!')
        }
      })
  }

  const postUserData = () => {
    isUserRegistered === false && user_name && user_email && axios.post('http://localhost:3000/usersData', {
      name: user_name,
      email: user_email,
      isTestAttempted: false
    })
    .then (resp => setFetchedUserId(resp.data.id))
  }
 
  const onRegisterHandler = (e) => {
    e.preventDefault();
    registerUser();
  }

  const onStartTestHandler = () => {
    console.log('Fetched User Id inside onStarthandler: ' , fetchedUserId);
    hasUserAttemptedTest === true && setStartTestMsg('You have already attempted the test.')
    hasUserAttemptedTest === false && axios.patch(`http://localhost:3000/usersData/${fetchedUserId}`, {
      isTestAttempted: true
    })
  }

  return (
    <div className='main-container'>
      <div className='container-sm'>
        <div className='card' style={{ width: '40%', margin: '0 auto' }}>
          <div className='card-header'>
            Register to Start the Test
          </div>
          <div className='card-body'>
            <h2 className='card-title'>Enter your Details</h2>
            <form action='#'>
              <div className='row mt-4 justify-content-start'>
                <div className='col-4 align-self-center'>
                  <label htmlFor='user_name'>Enter Name: </label>
                </div>
                <div className='col-8  align-self-center'>
                  <input value={user_name} onChange={userNameChangeHandler} type='text' id='user_name' autoComplete='off' />
                </div>
              </div>

              <div className='row mt-4 justify-content-start'>
                <div className='col-4 align-self-center'>
                  <label htmlFor='email'>Enter Email: </label>
                </div>
                <div className='col-8 align-self-center'>
                  <input onChange={userEmailChangeHandler} type='email' id='email' autoComplete='off' />
                </div>
              </div>

              <button onClick={onRegisterHandler} className='btn btn-info m-2 ms-0' type='submit'>Register</button>

            </form>

            <p className='card-text'>{registeration_msg}</p>

            <Link to={hasUserAttemptedTest ? '/' : '/test'}>
              <button className='btn btn-primary m-2 ms-0' onClick={onStartTestHandler}>Start Test</button>
            </Link>

            <p className='card-text'>{startTest_msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
