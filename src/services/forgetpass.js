// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/saigonwaterbus';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const sendMailCode = async (email) => {
    // console.log("sending email to", 'http://localhost:8080/api/saigonwaterbus/send-mail-code?emailAddress=${encodeURIComponent(emailAddress)}');
    
    const url = `http://localhost:8080/api/saigonwaterbus/send-mailcode-forgetpass?email=${encodeURIComponent(email)}`;
    
    const response = await axios.get(url,{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};


const resetPassword = async (inputCode, email, confirmPassword) => {
    const url = `http://localhost:8080/api/saigonwaterbus/forgot-password?gmailForget=${encodeURIComponent(email)}&codeGmail=${encodeURIComponent(inputCode)}&newPass=${confirmPassword}`;

  try {
    const response = await apiClient.post(url)
    return response;
  } catch (error) {
    // console.error('Error searching trips:', error);
    throw error;
  }
};

const forgetService = {
  sendMailCode,
  resetPassword
  // Có thể thêm các hàm khác ở đây
};

export default forgetService;
