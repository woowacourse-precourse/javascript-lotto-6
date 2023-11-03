import ERRORS from '../constants/Errors.js';

const errorMessage = (message, input) => `${message} 입력값 : ${input}`;

export class BalanceTypeError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.balanceType, input));
  }
}
