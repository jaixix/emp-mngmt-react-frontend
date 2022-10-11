import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
 
 export default class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    } 

    editEmployee(id){
        // const { history } = this.props;
        // history.push(`/update-employee/${id}`);
        window.location.href=`/update-employee?id=${id}`;
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees : res.data});
        });
    }

    addEmployee(){
        this.props.history.push("/add-employee");
    }

   render() {
     return (
       <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row addLink">
            <Link className="btn btn-primary" to="/add-employee">Add Employee</Link>
        </div>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr className='text-center'>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button onClick = {() => this.editEmployee(employee.id)}
                                    className="btn btn-info">Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
       </div>
     )
   }
 }
 