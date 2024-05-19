import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions';
import { useAlert } from 'react-alert';

const Login = () => {

  const [name,setName]  = useState('')
  const [email,setEmail]  = useState('')
  const [password,setPassword]  = useState('')

  const dispatch = useDispatch()

  const alert = useAlert();
  const {error} = useSelector((state)=>state.user);

  console.log(error)
  const navigate = useNavigate();

  const goToSignUp = ()=>{
    navigate('/signup')
  }


  const handleSubmit =async (e) => {
    e.preventDefault();

    const obj = {
        name,
        email,
        password,
    }    

    dispatch(loginUser(obj))

    navigate('/')

  };

  
  useEffect(()=>{
    if(error){
        alert.error(error);
        dispatch({type:'clearErrors'});
    }
  },[error,alert,dispatch])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>

        <div>
          <button onClick={goToSignUp} className='text-gray-400'>new user?   Create New Account</button>
        </div>

      </form>
    </div>
  );
};

export default Login;
