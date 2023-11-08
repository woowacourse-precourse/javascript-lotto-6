import { CommonError } from './CommonError.js';

export const BonusNumberValidate = {
  bonusNumberValidate(number, winningNumbers) {
    this.validateSingleNumber(number);
    const isNumber = Number(number[0]);
    this.validateBonusNumber(isNumber, winningNumbers);
    CommonError.numberError(isNumber);
  },

  validateSingleNumber(number) {
    if (number.length !== 1) {
      throw new Error('[ERROR] 하나의 입력이 아닙니다.');
    }
  },

  validateBonusNumber(isNumber, winningNumbers) {
    if (winningNumbers.includes(isNumber)) {
      throw new Error('[ERROR] 당첨 번호와 중복된 숫자가 있습니다.');
    }
  },
};

export const CashValidate = {
  cashValidate(cash) {
    if (isNaN(cash)) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    if (cash < 1000) {
      throw new Error('[ERROR] 금액이 부족합니다.');
    }
    if (cash % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위가 아닙니다.');
    }
  },
};
