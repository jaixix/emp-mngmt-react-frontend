import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
// import FooterComponent from './FooterComponent';

export default class UpdateEmployeeComponent extends Component {

    constructor(props) {
      super(props);

      this.state = {
        //   id: window.location.href.split('/').pop(),
          id: '',
          firstName: '',
          lastName: '',
          emailId: ''
      }
  }

  componentDidMount(){
    const url = new URLSearchParams(window.location.search);
    this.setState({ id: url.get("id")}, () => {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
              firstName: employee.firstName,
              lastName: employee.lastName,
              emailId: employee.emailId
            });
          });
    });
  }

  updateEmployee = (e) => {
      let employee = {firstName: this.state.firstName, lastName: this.state.lastName,
          emailId: this.state.emailId};
      console.log("employee => " + JSON.stringify(employee));
      window.location.href="/employees";
  }

  changeFirstNameHandler = (event) => {
      this.setState({firstName: event.target.value});
  }
  changeLastNameHandler = (event) => {
      this.setState({lastName: event.target.value});
  }
  changeEmailIdHandler = (event) => {
      this.setState({emailId: event.target.value});
  }

  render() {
      return (
      <div>
          <div className="container">
              <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center">Update Employee</h3>
                      <div className="card-body">
                          <form>
                              <div className="form-group">
                                  <label>First Name : </label>
                                  <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                              </div>
                              <div className="form-group">
                                  <label>Last Name : </label>
                                  <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                              </div>
                              <div className="form-group">
                                  <label>Email Address : </label>
                                  <input placeholder="Email Address" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                              </div>
                              <div className="actionButtons">
                                  <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                  <Link className="btn btn-danger" to="/employees" style={{marginLeft: "10px"}}>Cancel</Link>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      )
  }
}
