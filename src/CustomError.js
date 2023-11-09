import error from './constants/error.js';

class CustomError extends Error {
  constructor(message, name) {
    super(`${error.ERROR} ${message}`);
    this.name = name;
  }

  static expense(message) {
    return new CustomError(message, error.name.EXPENSE);
  }

  static number(message) {
    return new CustomError(message, error.name.NUMBER);
  }

  static BonusNumber(message) {
    return new CustomError(message, error.name.BONUSNUMVER);
  }
}
export default CustomError;
