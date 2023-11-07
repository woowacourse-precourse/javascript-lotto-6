export const ERROR_TYPE = {
  error: "error",
  inputError: "inputError",
};

class AppError extends Error {
  type;

  constructor(errorMessage, type = ERROR_TYPE.error) {
    super(`[ERROR] ${errorMessage}`);
    this.type = type;
  }
}

export default AppError;
