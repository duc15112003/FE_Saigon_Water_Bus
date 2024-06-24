
import axios from 'axios';
import { param } from 'jquery';
const API_BASE_URL = 'http://localhost:8080/api/saigonwaterbus';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const LoginProcess = async (username, password) => {

    try {
        // Gửi yêu cầu POST với body là một đối tượng JSON chứa thông tin đăng nhập
        const response = await apiClient.post(`${API_BASE_URL}/login`, { username, password});
    
        const responseDataUsername = response.data.result.username;
        localStorage.setItem('token', response.data.result.token);
        localStorage.setItem('us', username);
                // window.location.href = '/';

        return "oke";
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};


const LoginGoogle= async (code) =>{
    try {
    const response = await axios.get(`http://localhost:8080/api/saigonwaterbus/accesstoken?code=${code}`);
        localStorage.setItem('token', response.data.token);
         localStorage.setItem('us', response.data.username);
  console.log("data"+response.data)
            return response.data;
    } catch (error) {
      throw new Error('Error processing Google code: ' + error.message);
    }
};


const LoginService = {
  LoginProcess,LoginGoogle
};

export default LoginService;