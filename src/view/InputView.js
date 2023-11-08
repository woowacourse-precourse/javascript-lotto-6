import { Console } from '@woowacourse/mission-utils';

import {
  isNatural,
  isThousandsDigit,
  isValidLottoRange,
  hasComma,
  isLengthSix,
  isNotNaturalAll,
  isDuplicated,
  isValidLottoRangeAll,
  hasBonus,
} from '../utils/isValidValue.js';

import {
  MEESAGE_INPUT_COINS,
  MEESAGE_INPUT_WINNING,
  MEESAGE_INPUT_BONUS,
} from '../constants/message.js';

import {
  ERROR_INVALID_NUMBER,
  ERROR_NOT_NATURAL,
  ERROR_INVALID_UNIT,
  ERROR_NOT_INCLUDE_COMMA,
  ERROR_INVALID_LENGTH,
  ERROR_INVALID_RANGE_NATUAL,
  ERROR_DUPLICATE_NUMBER,
  ERROR_INVALID_RANGE,
} from '../constants/message.js';

export default class InputView {
  async coin() {
    const cash = await Console.readLineAsync(MEESAGE_INPUT_COINS);

    try {
      this.#validateCash(cash);
      return Number(cash / 1000);
    } catch (error) {
      Console.print(error.message);
      return this.coin();
    }
  }

  #validateCash(cash) {
    if (isNaN(cash)) throw new Error(ERROR_INVALID_NUMBER);

    const numberdCash = Number(cash);

    if (!isNatural(numberdCash)) throw new Error(ERROR_NOT_NATURAL);

    if (!isThousandsDigit(numberdCash)) throw new Error(ERROR_INVALID_UNIT);

    return cash;
  }

  async winning() {
    const winningNumber = await Console.readLineAsync(MEESAGE_INPUT_WINNING);

    try {
      return this.#validateWinningNumber(winningNumber);
    } catch (error) {
      Console.print(error.message);
      return this.winning();
    }
  }

  #validateWinningNumber(winningNumber) {
    if (!hasComma(winningNumber)) throw new Error(ERROR_NOT_INCLUDE_COMMA);

    const parsedNumbers = parseWinningNumber(winningNumber);

    if (!isLengthSix(parsedNumbers)) throw new Error(ERROR_INVALID_LENGTH);

    if (isNotNaturalAll(parsedNumbers))
      throw new Error(ERROR_INVALID_RANGE_NATUAL);

    if (isDuplicated(parsedNumbers)) throw new Error(ERROR_DUPLICATE_NUMBER);

    if (isValidLottoRangeAll(parsedNumbers))
      throw new Error(ERROR_INVALID_RANGE);

    return parsedNumbers;
  }

  async bonus(winningNumber) {
    const bonus = await Console.readLineAsync(MEESAGE_INPUT_BONUS);

    try {
      return this.#validateBonus(bonus, winningNumber);
    } catch (error) {
      Console.print(error.message);
      return this.bonus(winningNumber);
    }
  }

  #validateBonus(bonus, winningNumber) {
    if (isNaN(bonus)) throw new Error(ERROR_INVALID_NUMBER);

    const numberdBonus = Number(bonus);

    if (!isNatural(numberdBonus)) throw new Error(ERROR_NOT_NATURAL);

    if (!isValidLottoRange(numberdBonus)) throw new Error(ERROR_INVALID_RANGE);

    if (hasBonus(numberdBonus, winningNumber)) throw new Error();

    return numberdBonus;
  }
}

function parseWinningNumber(winningNumber) {
  return winningNumber.split(',').map((number) => Number(number.trim()));
}
