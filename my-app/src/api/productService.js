import axios from 'axios';

const API_URL = 'http://localhost:8080/api/employees';

export const createEmployee = (employee) => {
    return axios.post(API_URL, employee);
};
