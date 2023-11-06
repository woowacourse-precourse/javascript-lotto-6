class CustomError extends Error {
  static PREFIX = '[ERROR]';

  constructor(message) {
    super(`\n${CustomError.PREFIX} ${message}\n`);
  }
}

export default CustomError;
