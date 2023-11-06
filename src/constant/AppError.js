class AppError extends Error {
    constructor(message) {
      super(`[ERROR] ${message}`);
    }
  }
  
  export default AppError;
