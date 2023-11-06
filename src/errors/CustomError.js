class CustomError extends Error {
  static ERROR_PREFIX = '[ERROR]';

  constructor(message) {
    super(`${CustomError.ERROR_PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

export default CustomError;
