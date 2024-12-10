import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './components/Counter';
import './index.tsx'
import './index.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greetings from './components/Greetings';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import UserDetails from './components/UserDetails';

function App(){
  return(
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Navigate to='/contacts/list'/>}/>
        <Route path='/contacts/list' element={<UserList />} />
        <Route path="/contacts/:id" element={<UserDetails/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </React.Fragment>
  ) 
  
}
export default App;
