import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteME, getuserProfile, loadUser, logoutUser } from '../actions/userActions';

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isAuthenticated}=useSelector((state=>state.user))

  console.log(user);

  const goToLogin = ()=>{
    navigate('/login')
  }

  const goToSignUp = ()=>{
    navigate('/signup')
  }

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  return (
    <div>
      <div className='flex justify-between px-12 my-6 bg-gray-200 shadow-md'>
        <div className='my-auto'>
          {
            isAuthenticated ? <span>hello, {user.name}</span> : <span>hello, User</span>
          }
        </div>
        <div className='py-1'>
          <button className='bg-blue-700 rounded-lg p-4 py-2 mx-2 text-lg' onClick={goToLogin}>login</button>
          <button className='bg-blue-700 rounded-lg p-4 py-2 mx-2 text-lg' onClick={goToSignUp}>SignUp</button>
        </div>
      </div>
      <div className='flex  justify-center h-screen text-xl text-blue-900 font-bold'>
        {
          isAuthenticated?(
            <div>
              <div className='flex justify-center'><img src={user.internTEST.url} className='rounded-full min-w-14' alt="" /></div>
              <div className='text-center'>name : {user.name}</div>
              <div className='text-center'>email : {user.email}</div>
              <div className='flex justify-between my-4'>
                <button onClick={()=>navigate('/update/profile')} className='text-white font-semibold bg-blue-700 py-2 px-4 rounded-lg mx-auto'>update profile</button>
              </div>
              <div className='flex justify-between my-4'>
                <button onClick={()=>navigate('/update/password')} className='text-white font-semibold bg-blue-700 py-2 px-4 rounded-lg mx-auto'>update password</button>
              </div>
              <div className='flex justify-between my-4'>
                <button onClick={()=>dispatch(deleteME())} className='text-white font-semibold bg-red-700 py-2 px-4 rounded-lg mx-auto'>Delete profile</button>
              </div>
              <div className='flex justify-between my-4'>
                <button onClick={()=>dispatch(logoutUser())} className='text-white font-semibold bg-red-700 py-2 px-4 rounded-lg mx-auto'>log Out</button>
              </div>
            </div>
          ):<div>please login first</div>
        }
      </div>
    </div>
  )
}

export default Home