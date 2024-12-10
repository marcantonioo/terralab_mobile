import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Customer from './components/Customer';
import { CustomerClass } from './components/CustomerClass';
import Employee from './components/Employee';
import { EmployeeClass } from './components/EmployeeClass';

function App(){
  return(
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className='row'>
            <div className='col'></div>
                <p className="h3 fw-bold">App Component</p>
                <p className='fst-italic'>teste</p>
              <button className="btn btn-success btn-sm">
                <i className='fa fa-book'/>Read more</button>
          {/*</div>
          <div className='row'>
            <div className='col'>
              <Customer name={'marco antonio'} age={19} title={'Software Engineer'}/>
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <CustomerClass name={'marcantonio'} age={19} title={'Software Engineer'}/>
            </div>
            */}

            <div className="row">
              <div className="col">
                <Employee/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <EmployeeClass/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) 
  
}
export default App;
