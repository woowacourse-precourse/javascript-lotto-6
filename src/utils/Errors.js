class CustomError extends Error {
  constructor(message, name) {
    super();
    this.message = `${message}`;
    this.name = name || this.constructor.name;
  }

  static userInputError(message) {
    return new CustomError(message, Error.name.userInputError);
  }

  static lottoValidateError(message) {
    return new CustomError(message, Error.name.lottoValidateError);
  }
}

export default CustomError;
