import { error } from '../utils/messages.js';

export class CustomError extends Error {
  constructor(message, name) {
    super(error(message));
    this.name = name;
  }

  static CommonUserInput(message) {
    return new CustomError(message, '사용자 입력 에러');
  }

  static Money(message) {
    return new CustomError(message, '로또 금액 에러');
  }

  static Lotto(message) {
    return new CustomError(message, '로또 숫자 에러');
  }

  static BonusNumber(message) {
    return new CustomError(message, '보너스 로또 숫자 에러');
  }
}
