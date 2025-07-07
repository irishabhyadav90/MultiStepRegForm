
// Request DTOs
export interface RegisterUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  residenceCountry: string;
  phoneNumber: string;
}

export interface SendOtpRequest {
  identifier: string; // Email or phone number
  method: 'email' | 'phone';
}

export interface VerifyOtpRequest {
  identifier: string;
  otp: string;
}

// Response DTOs

export interface RegisterUserResponse {
  message: string;
  userId: string;
}

export interface SendOtpResponse {
  message: string;
}

export interface VerifyOtpResponse {
  message: string;
  token: string;
}