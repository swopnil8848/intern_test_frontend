import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, updateUserProfile } from '../actions/userActions';
import { CLEAR_ERRORS, CLEAR_MESSAGE } from '../constants/userConstants';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

  const {loading,error,user} = useSelector(state=>state.user)
  const {loading:updateLoading,error:updateError,message} = useSelector(state=>state.updateUser)
  const navigate = useNavigate();


  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [avatar,setAvatar] = useState()
  const [avatarPrev,setAvatarPrev] = useState(user?.internTEST?.url);

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () =>{
        if(Reader.readyState==2){
            // console.log(Reader.result)
            setAvatarPrev(Reader.result);

            setAvatar(Reader.result);
        }
    }
  };

  const submitHandler =async (e)=>{
    e.preventDefault();
    await dispatch(updateUserProfile(name,email,avatar));
    dispatch(loadUser());
    navigate('/')
  }

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])

  useEffect(()=>{
    console.log("user updated message",message)
    if(error){
      dispatch({type:CLEAR_ERRORS})
    }
    if(updateError){
        dispatch({type:CLEAR_ERRORS})
    }
    if(message){
        console.log('inside the if ',message)
        dispatch({type:CLEAR_MESSAGE})
    }
    console.log(user);
  },[dispatch,error,updateError,message]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" 
        onSubmit={submitHandler}
      >
        <h3 className="text-3xl mb-6 text-center">Social App</h3>
        
        <div className="flex justify-center mb-6">
          <img 
            src={avatarPrev} 
            alt="user" 
            className="h-40 w-40 rounded-full"
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        
        <div className="mb-4">
          <input 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
            type="text" 
            placeholder="Name" 
            value={name} 
            required 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <input 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
            type="email" 
            placeholder="Email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <button 
          disabled={updateLoading} 
          type="submit" 
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
