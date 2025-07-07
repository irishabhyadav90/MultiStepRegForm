import apiClient from './index';
import type {
    RegisterUserRequest,
    RegisterUserResponse,
    SendOtpRequest,
    SendOtpResponse,
    VerifyOtpRequest,
    VerifyOtpResponse,
} from '../models/auth';

/**
 * Service to register a new user.
 */
export const registerUser = async (data: RegisterUserRequest): Promise<RegisterUserResponse> => {
  const response = await apiClient.post<RegisterUserResponse>('/register', data);
  return response.data;
};

/**
 * Service to send OTP.
 */
export const sendOtp = async (data: SendOtpRequest): Promise<SendOtpResponse> => {
  const response = await apiClient.post<SendOtpResponse>('/sendOtpRequest', data);
  return response.data;
};

/**
 * Service to verify OTP.
 */
export const verifyOtp = async (data: VerifyOtpRequest): Promise<VerifyOtpResponse> => {
  const response = await apiClient.post<VerifyOtpResponse>('/verify-otp', data);
  return response.data;
};
