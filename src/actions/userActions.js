import axios from "axios"
import { DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../constants/userConstants"


export const loginUser = (obj)=>async (dispatch)=>{
    try{

        dispatch({type:LOGIN_REQUEST})
        const {data} = await axios.post('http://localhost:4000/api/v1/login',obj,{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true
        })

        dispatch({type:LOGIN_SUCCESS,payload:data.user})

    }catch(error){
        dispatch({type:LOGIN_FAIL,payload:error.response.data.message})
    }
}

export const loadUser = ()=>async (dispatch)=>{
    try{

        dispatch({type:LOAD_USER_REQUEST})

        // const {data} = await axios.get('/api/v1/me',{withCredentials:true})
        const {data} = await axios.get('http://localhost:4000/api/v1/me',{withCredentials:true})

        dispatch({type:LOAD_USER_SUCCESS,payload:data.user})

    }catch(error){
        console.log(error)
        dispatch({type:LOAD_USER_FAIL,payload:error.response.data.message})
    }
}

export const getuserProfile = (id)=> async(dispatch)=>{
    try{
        dispatch({type:USER_PROFILE_REQUEST})

        const {data} = await axios.get(`/api/v1/user/${id}`,{withCredentials:true});
        // const {data} = await axios.get(`http://localhost:3000/api/v1/user/${id}`,{withCredentials:true});
        
        dispatch({type:USER_PROFILE_SUCCESS,payload:data.user})
        
    }catch(error){
        dispatch({type:USER_PROFILE_FAIL,payload:error.response.data.message})
    }
}

export const updateUserProfile = (name,email,avatar)=>async (dispatch)=>{
    try{

        dispatch({type:UPDATE_PROFILE_REQUEST})
        // const {data} = await axios.put('/api/v1/update/profile',{name,email,internTEST:avatar},{
        const {data} = await axios.put('http://localhost:4000/api/v1/me/update',{name,email,internTEST:avatar},{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true
        })

        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data.message})

    }catch(error){
        dispatch({type:UPDATE_PROFILE_FAIL,payload:error.response.data.message})
    }
}

export const updateUserPassword = (oldPassword,newPassword)=>async (dispatch)=>{
    try{

        dispatch({type:UPDATE_PASSWORD_REQUEST})
        const {data} = await axios.put('http://localhost:4000/api/v1/password/update',{oldPassword,newPassword},{
        // const {data} = await axios.put('/api/v1/update/password',{oldPassword,newPassword},{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true
        })

        dispatch({type:UPDATE_PASSWORD_SUCCESS,payload:data.message})

    }catch(error){
        dispatch({type:UPDATE_PASSWORD_FAIL,payload:error.response.data.message})
    }
}

export const logoutUser = ()=>async (dispatch)=>{
    try{

        dispatch({type:LOGOUT_REQUEST})

        // await axios.get('/api/v1/logout',{withCredentials:true})
        await axios.get('http://localhost:4000/api/v1/logout',{withCredentials:true})

        dispatch({type:LOGOUT_SUCCESS})

    }catch(error){
        dispatch({type:LOGOUT_FAIL,payload:error.response.data.message})
    }
}

export const deleteME = ()=>async (dispatch)=>{
    try{

        dispatch({type:DELETE_USER_REQUEST})
        const {data} = await axios.delete('http://localhost:4000/api/v1/delete/me',{
        // const {data} = await axios.delete('/api/v1/delete/me',{
            withCredentials:true
        })

        dispatch({type:DELETE_USER_SUCCESS,payload:data.message})

    }catch(error){
        dispatch({type:DELETE_USER_FAIL,payload:error.response.data.message})
    }
}