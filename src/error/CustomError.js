class CustomError extends Error {
  static PREFIX = '[ERROR]';

  constructor(feedback) {
    super(`${CustomError.PREFIX} ${feedback}`);
  }
}

export default CustomError;
