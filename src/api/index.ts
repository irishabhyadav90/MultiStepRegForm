import axios, { type AxiosInstance, AxiosError } from 'axios';
import { ApiError, type ApiErrorResponse } from '../models/common';


const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const errorData = error.response.data as ApiErrorResponse;
      const statusCode = error.response.status;
      const errorMessage = errorData.message || 'An unexpected error occurred.';

      throw new ApiError(errorMessage, statusCode, errorData);
    } else if (error.request) {
      throw new ApiError('No response received from server.', 0, { message: 'Network Error' });
    } else {
      throw new ApiError(error.message, 0, { message: 'Request setup error' });
    }
  }
);

export default apiClient;