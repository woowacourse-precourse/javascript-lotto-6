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

export default class View {
  async coin() {
    const cash = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    try {
      this.#validateCash(cash);
      return Number(cash / 1000);
    } catch (error) {
      Console.print(error.message);
      return this.coin();
    }
  }

  #validateCash(cash) {
    if (isNaN(cash)) throw new Error(`[ERROR] : 숫자가 아닙니다.\n`);

    const numberdCash = Number(cash);

    if (!isNatural(numberdCash))
      throw new Error(`[ERROR] : 0 이상의 자연수를 입력하세요.\n`);

    if (!isThousandsDigit(numberdCash))
      throw new Error(`[ERROR] : 구매 금액은 1,000원 단위입니다.\n`);

    return cash;
  }

  async winning() {
    const winningNumber = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );

    try {
      return this.#validateWinningNumber(winningNumber);
    } catch (error) {
      Console.print(error.message);
      return this.winning();
    }
  }

  #validateWinningNumber(winningNumber) {
    if (!hasComma(winningNumber))
      throw new Error(`[ERROR] : 쉼표로 구분하여 입력하세요\n`);

    const parsedNumbers = parseWinningNumber(winningNumber);

    if (!isLengthSix(parsedNumbers))
      throw new Error(`[ERROR] : 6개의 수를 입력하세요\n`);

    if (isNotNaturalAll(parsedNumbers))
      throw new Error(`[ERROR] : 1부터 45까지의 자연수를 입력하세요\n`);

    if (isDuplicated(parsedNumbers))
      throw new Error(`[ERROR] : 숫자는 중복될 수 없습니다.\n`);

    if (isValidLottoRangeAll(parsedNumbers))
      throw new Error(`[ERROR] : 1부터 45 사이의 수를 입력하세요\n`);

    return parsedNumbers;
  }

  async bonus(winningNumber) {
    const bonus = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );

    try {
      return this.#validateBonus(bonus, winningNumber);
    } catch (error) {
      Console.print(error.message);
      return this.bonus(winningNumber);
    }
  }

  #validateBonus(bonus, winningNumber) {
    if (isNaN(bonus)) throw new Error(`[ERROR] : 숫자가 아닙니다.\n`);

    const numberdBonus = Number(bonus);

    if (!isNatural(numberdBonus))
      throw new Error(`[ERROR] : 0 이상의 자연수를 입력하세요.\n`);

    if (!isValidLottoRange(numberdBonus))
      throw new Error(`[ERROR] : 1부터 45 사이의 수를 입력하세요\n`);

    if (hasBonus(numberdBonus, winningNumber))
      throw new Error(`[ERROR] : 당첨금액과 중복되지 않는 수를 입력해주세요\n`);

    return numberdBonus;
  }
}

function parseWinningNumber(winningNumber) {
  return winningNumber.split(',').map((number) => Number(number.trim()));
}
