import { ERROR_MSG } from '../constants/LottoMsg.js';
import InputError from './InputError.js';

class InputValidate {
  #LOTTO_REGAX;

  constructor() {
    this.#LOTTO_REGAX = /\s|[!@#$%^&*(),?":{}|<>]|[a-zA-Z]/;
  }

  async inputMoney(money) {
    this.#numberString(money);
    this.#moneySafeNumber(money);
    this.#moneyThousand(money);
    this.#moneyNegative(money);
    return Number(money);
  }

  #numberString(money) {
    if (this.#LOTTO_REGAX.test(money)) {
      throw new InputError(ERROR_MSG.MONEY_NUMBER_ERROR);
    }
  }

  #moneySafeNumber(money) {
    if (!Number.isSafeInteger(Number(money))) {
      throw new InputError(ERROR_MSG.MONEY_SHOULD_NUMBER);
    }
  }

  #moneyThousand(money) {
    if (Number(money) % 1000 !== 0 || Number(money) === 0) {
      throw new InputError(ERROR_MSG.MONEY_IS_THOUSAND);
    }
  }

  #moneyNegative(money) {
    if (Number(money) < 0) {
      throw new InputError(ERROR_MSG.MONEY_NEGATIVE_ERROR);
    }
  }

  async lottoNumber(numbers) {
    this.#lottoRegax(numbers);
    this.#lottoSafeNumber(numbers);
    this.#lottoLengthSix(numbers);
    this.#lottoDuplicate(numbers);
    this.#lottoRangeCheck(numbers);
  }

  #lottoRegax(numbers) {
    if (numbers.some((eachNumber) => this.#LOTTO_REGAX.test(eachNumber))) {
      throw new InputError(ERROR_MSG.LOTTO_STRING_ERROR);
    }
  }

  #lottoSafeNumber(numbers) {
    if (numbers.some((eachNumber) => !Number.isSafeInteger(eachNumber))) {
      throw new InputError(ERROR_MSG.LOTTO_DECIMAL_ERROR);
    }
  }

  #lottoLengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new InputError(ERROR_MSG.LOTTO_SHOULD_SIX);
    }
  }

  #lottoDuplicate(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new InputError(ERROR_MSG.LOTTO_DUPLICATE_ERROR);
    }
  }

  #lottoRangeCheck(numbers) {
    if (numbers.some((eachNumber) => eachNumber > 45 || eachNumber <= 0)) {
      throw new Error(ERROR_MSG.LOTTO_RANGE_ERROR);
    }
  }

  async bonusNumber(bonus) {
    this.#bonusSafeNumber(bonus);
    this.#numberString(bonus);
    this.#bonsuNumberRange(bonus);
  }

  #bonusSafeNumber(bonus) {
    if (!Number.isSafeInteger(Number(bonus))) {
      throw new InputError(ERROR_MSG.BONUS_NUMBER_NOT_NUMBER);
    }
  }

  #bonsuNumberRange(bonus) {
    if (Number(bonus) <= 0 || Number(bonus) > 45) {
      throw new InputError(ERROR_MSG.BONUS_NUMBER_RANGE_ERROR);
    }
  }
}

export default InputValidate;
