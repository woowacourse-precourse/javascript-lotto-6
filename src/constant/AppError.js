export const ERROR_TYPE = {
  error: "error",
  inputError: "inputError",
};

class AppError extends Error {
    constructor(message) {
      super(`[ERROR] ${message}`);
    }
  }
  
  export default AppError;
