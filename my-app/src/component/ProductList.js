import React, { useState} from 'react';
import {createEmployee,} from '../api/productService';

const EmployeeList = () => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    
  

    const handleSubmit = async (e) => {
        e.preventDefault();
            await createEmployee({ name, department, salary});
      
        setName('');
        setSalary('');
        setDepartment('');
    };

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                  <input
                    type="text"
                    placeholder="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                />
              
                <button type="submit">Create</button>
            </form>
          
        </div>
    );
};

export default EmployeeList;
