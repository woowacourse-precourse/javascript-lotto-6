import ERRORS from '../constants/Errors.js';

const errorMessage = (message, input) => `${message} 입력값 : ${input}`;

export class LottoLengthError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.lottoLength, input));
  }
}

export class LottoRangeError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.lottoRange, input));
  }
}

export class LottoTypeError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.lottoType, input));
  }
}

export class LottoDuplicatedError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.lottoDuplicated, input));
  }
}

export class BalanceTypeError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.balanceType, input));
  }
}



