class CustomError extends Error {
  constructor(message, name) {
    super();
    this.message = `${message}`;
    this.name = name || this.constructor.name;
  }

  static userInputError(message) {
    return new CustomError(message, Error.name.userInputError);
  }
}

export default CustomError;
