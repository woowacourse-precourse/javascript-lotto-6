class CustomError extends Error {
  constructor(message, name) {
    super(`[ERROR] ${message}`);
    this.name = name;
  }

  static expense(message) {
    return new CustomError(message, 'expense input error');
  }

  static number(message) {
    return new CustomError(message, 'number input error');
  }

  static BonusNumber(message) {
    return new CustomError(message, 'BonusNumber input error');
  }
}
export default CustomError;
