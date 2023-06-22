import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-hot-toast';
import { loginThunk } from '../../../store/auth/thunks';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email, password', { email, password });
    dispatch(loginThunk(
      		email,
			password,
    ))
    toast.success('Welcome')
    // login({
		// 	email,
		// 	password,

		// 	avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
		// }).then((res) => {
    //   // в результате приходит токен .then((res) => console.log('res Welcome', res) значит сохранять в редакс будем
    //   console.log('res Welcome', res)
    
		// 	toast.success('Welcome')
		// 	// navigate('/')
		// })


  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            name='email'
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={handleChange}
            value={email}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            name='password'
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={handleChange}
            value={password}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          disabled={!email || !password}
        >
          Login
        </button>
        <Link
          to='/signUp'
          style={{
            display: 'inline-block',
            margin: '15px 0 0 15px',
            padding: '8px 20px',
            backgroundColor: 'blue',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '15px '
          }}
        >
          SignUp
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
