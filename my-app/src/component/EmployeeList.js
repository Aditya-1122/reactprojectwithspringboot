import React, { useEffect, useState } from 'react';
import { getEmployees, createEmployee, deleteEmployee } from '../services/api';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    const handleCreateEmployee = async () => {
        const newEmployee = { name, department, salary: Number(salary) };
        await createEmployee(newEmployee);
        fetchEmployees();
        setName('');
        setDepartment('');
        setSalary('');
    };

    const handleDeleteEmployee = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <div>
            <h1>Employee List</h1>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Department" 
                value={department} 
                onChange={(e) => setDepartment(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Salary" 
                value={salary} 
                onChange={(e) => setSalary(e.target.value)} 
            />
            <button onClick={handleCreateEmployee}>Add Employee</button>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.department} - ${employee.salary}
                        <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
