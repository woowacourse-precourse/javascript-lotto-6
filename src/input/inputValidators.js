import { ERROR, CONSTANTS } from "../output/Constants";

const inputValidators = {
  validatePayment(payment) {
    if (!/^\d+$/.test(payment)) {
      throw new Error(`${ERROR.PAYMENT_NOT_A_NUMBER}`);
    }

    if (payment % CONSTANTS.ONE_THOUSAND !== 0){
      throw new Error(`${ERROR.PAYMENT_NOT_IN_THOUSANDS}`);
    }
    
    if (/^0/.test(payment)) {
      throw new Error(`${ERROR.PAYMENT_STARTS_WITH_ZERO}`);
    }
  },

  validateWinningNumbers(winnigNumbers) {
    if (winnigNumbers.length !== CONSTANTS.LOTTO_NUMBER_LENGTH) {
      throw new Error(`${ERROR.WINNING_NUMBERS_INVALID_LENGTH}`);
    }

    if (!winnigNumbers.every((number) => this.isInRange(number))) {
      throw new Error(`${ERROR.WINNING_NUMBERS_INVALID_RANGE}`);
    }

    if (this.isDuplicated(winnigNumbers)) {
      throw new Error(`${ERROR.WINNING_NUMBERS_DUPLICATED}`);
    }
  },

  validateBonusNumber(bonusNumber, winnigNumbers) {
    if (!this.isInRange(bonusNumber)) {
      throw new Error(`${ERROR.BONUS_NUMBER_INVALID_RANGE}`);
    }

    const totalNumbers = [...winnigNumbers, bonusNumber];
    if (this.isDuplicated(totalNumbers)) {
      throw new Error(`${ERROR.BONUS_NUMBER_DUPLICATED}`);
    }
  },

  isInRange(number) {
    return number === parseInt(number) && number >= CONSTANTS.MIN_LOTTO_NUMBER && number <= CONSTANTS.MAX_LOTTO_NUMBER;
  },

  isDuplicated(numberlist) {
    return new Set(numberlist).size !== numberlist.length;
  }
};

export default inputValidators;