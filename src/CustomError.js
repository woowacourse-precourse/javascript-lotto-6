class CustomError extends Error {
  static #PREFIX = '[ERROR] ';

  constructor(message) {
    super(CustomError.#PREFIX + message);
  }
}

export default CustomError;
