import { error } from '../utils/messages.js';

export class CustomError extends Error {
  constructor(message, name) {
    super(error(message));
    this.name = name;
  }

  static CommonUserInput(message) {
    return new CustomError(message, '사용자 입력 에러');
  }
}
