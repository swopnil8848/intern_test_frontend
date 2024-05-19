import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Home from "./components/Home";
import SignUp from "./components/SIgnUp";
import UpdateProfile from "./components/UpdateProfile";
import UpdatePassword from "./components/UpdatePassword";
import DeleteProfile from "./components/DeleteProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/update/profile" element={<UpdateProfile/>}/>
        <Route path="/update/password" element={<UpdatePassword/>}/>
        <Route path="/delete/account" element={<DeleteProfile/>}/>
      </Routes>
    </Router>
  )
}

export default App;
