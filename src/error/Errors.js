import ERRORS from '../constants/Errors.js';

const errorMessage = (message, input) => `${message} : ${input}`;

export class BalanceTypeError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.balanceType, input));
  }
}
