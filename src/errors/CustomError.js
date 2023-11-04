class CustomError extends Error {
  static PREFIX = '[ERROR]';

  constructor(message) {
    super(`\n\n${CustomError.PREFIX} ${message}\n\n`);
  }
}

export default CustomError;
