class AppError extends Error {
  constructor(errorMessage) {
    super(`[ERROR] ${errorMessage}`);
  }
}

export default AppError;
