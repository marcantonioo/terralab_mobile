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


function App(){
  return(
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className='row'>
            <div className='col'></div>
                <p className="h3 fw-bold">App Component</p>
                <p className='fst-italic'>teste</p>          
          </div>
          {/*
          <div className="row">
            <div className="col">
              <Counter/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Greetings/>
            </div>
          </div>
          */}
        </div>
        
        <div className="row">
          <div className="col">
            <UserList/>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) 
  
}
export default App;
