import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1'; // Replace with your API URL

export const login = async (email: string, password: string) => {
    try {
        console.log("login", email,password)
        const response = await axios.post(`${API_URL}/user/login`, { email, password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const logout = async ()=> {
    try {
        await axios.post(`${API_URL}/user/logout`);
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const signup = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/user/register`, { name, email, password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};