// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const timGhe = async (chuyenId) => {
  try {
    const response = await apiClient.get(`/dat-ve/${chuyenId}`);
    // console.log(response.data.data)
    return response.data.result;
  } catch (error) {
    console.error('Error fetching seat labels:', error);
    throw error;
  }
};

const timChuyen = async (searchParams) => {
  try {
    const response = await apiClient.get('/dat-ve', {
      params: searchParams,
    });
    return response.data;
  } catch (error) {
    console.error('Error searching trips:', error);
    throw error;
  }
};

const apiService = {
  timGhe,
  timChuyen
  // Có thể thêm các hàm khác ở đây
};

export default apiService;
