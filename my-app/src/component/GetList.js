import React, { useState, useEffect } from 'react';
import { getEmployees, createEmployee } from '../services/api'; // Import GET and POST functions

const EmployeeList = () => {
    // State to manage employees
    const [employees, setEmployees] = useState([]);
    // State to manage new employee form data
    const [employee, setEmployee] = useState({
        name: '',
        department: '',
        salary: ''
    });

    // Fetch employees when the component mounts
    useEffect(() => {
        fetchEmployees();
    }, []);

    // Fetch employees from the API
    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    // Handle form submission to create a new employee
    const handleCreateEmployee = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        try {
            await createEmployee(employee); // Create the employee using API
            fetchEmployees(); // Fetch updated employee list
            // Clear form after submission
            setEmployee({ name: '', department: '', salary: '' });
        } catch (error) {
            console.error("Error creating employee:", error);
        }
    };

    return (
        <div>
            <h1>Employee Management</h1>

            {/* Employee Creation Form */}
            <form onSubmit={handleCreateEmployee} style={{ marginBottom: '20px' }}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input 
                        type="text"
                        name="department"
                        value={employee.department}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Salary:</label>
                    <input 
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Add Employee</button>
            </form>

            {/* Employee List in Table */}
            <table border="1" width="80%" style={{ margin: '20px auto', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length === 0 ? (
                        <tr>
                            <td colSpan="4">No employees available</td>
                        </tr>
                    ) : (
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>${employee.salary}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
