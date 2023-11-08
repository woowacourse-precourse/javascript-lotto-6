class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}

export default CustomError;
