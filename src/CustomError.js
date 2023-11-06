import { ERROR_MESSAGES } from './Constants.js';

export class CustomError extends Error {
  static #prefix = ERROR_MESSAGES.PREFIX;

  constructor(errorMessage) {
    super(`${CustomError.#prefix} ${errorMessage}`);
  }
}
