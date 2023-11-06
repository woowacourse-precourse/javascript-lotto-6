import { GAME_MESSAGES } from "./Constants.js";

export class CustomError extends Error {
  static #prefix = GAME_MESSAGES.ERROR.PREFIX;

  constructor(errorMessage) {
    super(`${CustomError.#prefix} ${errorMessage}`);
  }
}
