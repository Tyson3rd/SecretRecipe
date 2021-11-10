
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import {Login} from './auth/Login';
import {Register} from './auth/Register';
import TopNav from './component/TopNav';

function App() {
  return (
    <BrowserRouter >
    <TopNav/>
    <Routes>
        <Route exact path ='/login' element={<Login />}/>
        <Route exact path ='/register' element={<Register />}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
