import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteME, logoutUser } from '../actions/userActions'

const DeleteProfile = () => {
    const [password,setPassword] = useState('')

    const {loading:deleteLoading} = useSelector((state)=>state.updateUser)
    const dispatch = useDispatch()

    const deleteProfileHandler =async () =>{
        await dispatch(deleteME());
        dispatch(logoutUser());
    }


  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div>
            <h1 className='text-red font-bold text-2xl text-center text-red-700'>DELETE ACCOUNT</h1>
            <h3 className='text-gray-400 w-3/5 mx-auto text-center'>Warning: By deleting this accound you are deleting eveything related to you from this website. restoration of your accound is not possible in future</h3>
            <form
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto" 
                onSubmit={deleteProfileHandler}
            >
                <div className="mb-4">
                    <input 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                        type="text" 
                        placeholder="password" 
                        value={password} 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-red-700 text-gray-100 p-2 rounded-lg font-semibold text-center'>DELETE ACCOUNT</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default DeleteProfile