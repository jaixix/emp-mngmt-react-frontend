import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

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
            </Routes>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
