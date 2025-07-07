/**
 * Generic API Error Response structure.
 */
export interface ApiErrorResponse {
    message: string;
    errors?: { [key: string]: string | string[] }; // Field-specific validation errors
  }
  
  /**
   * Custom Error class for API responses.
   * Helps in distinguishing API errors from other errors.
   */
  export class ApiError extends Error {
    statusCode: number;
    response: ApiErrorResponse;
    isApiError: boolean = true; // Flag to easily identify this error type
  
    constructor(message: string, statusCode: number, response: ApiErrorResponse) {
      super(message);
      this.name = 'ApiError';
      this.statusCode = statusCode;
      this.response = response;
  
      // Set the prototype explicitly to ensure instanceof works correctly
      Object.setPrototypeOf(this, ApiError.prototype);
    }
  }
  
  // Common success response structure
  export interface ApiResponse<T=undefined> {
    message: string;
    data?: T;
  }