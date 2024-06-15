import axios from 'axios';

export const saveUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:6005/api/users/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


