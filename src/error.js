import { ERROR } from './constant/index.js';

export default class CustomError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
  }
}
