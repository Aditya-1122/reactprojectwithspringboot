import axios from 'axios';

// Base URL of your Spring Boot API
const API_BASE_URL = 'http://localhost:8080/api/employees';

export const getEmployees = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const createEmployee = async (employee) => {
    const response = await axios.post(API_BASE_URL, employee);
    return response.data;
};

export const getEmployeeById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
};

export const updateEmployee = async (id, employee) => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, employee);
    return response.data;
};

export const deleteEmployee = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};
