import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';

function UserDetails() {

  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [fetchedUserData, setFetchedUserData] = useState({});
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [hasUserAttemptedTest, setHasUserAttemptedTest] = useState('');
  const [registeration_msg, setRegisterationMsg] = useState('');

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  }
  const userEmailChangeHandler = (e) => {
    setUserEmail(e.target.value);
  }




  
  return (
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

            <button className='btn btn-info m-2 ms-0' type='submit'>Register</button>

          </form>

          <Typography>{registeration_msg}</Typography>

          <Link to={!hasUserAttemptedTest ? '/' : '/test'}>
            <button  className='btn btn-primary m-2 ms-0'>Start Test</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
