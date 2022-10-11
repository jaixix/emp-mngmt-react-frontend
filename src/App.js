// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Routes>  
              <Route path="/" exact element= {<ListEmployeeComponent/>}></Route>
              <Route path="/employees" exact element= {<ListEmployeeComponent/>}></Route>
              <Route path="/add-employee" exact element= {<CreateEmployeeComponent/>}></Route>
              <Route path="/update-employee" exact element= {<UpdateEmployeeComponent />}></Route>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
