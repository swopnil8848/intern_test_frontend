import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [name,setName]  = useState('')
  const [email,setEmail]  = useState('')
  const [password,setPassword]  = useState('')
  const [image,setImage]  = useState('')

  const navigate = useNavigate();

  const goToSignUp = ()=>{
    navigate('/login')
  }

  const handleImageChange = (e) =>{
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () =>{
        if(Reader.readyState==2){
            // console.log(Reader.result)
            setImage(Reader.result);
        }
    }
  }

  const handleSubmit =async (e) => {
    e.preventDefault();

    const obj = {
        name,
        email,
        password,
        internTEST:image
    }    

    const {data} = await axios.post('http://localhost:4000/api/v1/register',obj,{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true
    })

    navigate('/')
  };

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

        <div>
          <label className="block text-gray-700">File</label>
          <input
            type="file"
            name="internTEST"
            onChange={handleImageChange}
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
            <button onClick={goToSignUp} className='text-gray-400 flex justify-center'>already exists?   Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
