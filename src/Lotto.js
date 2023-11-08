import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, PRIZE } from './constants/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      if (!Number.isInteger(number) || number > 45 || number < 1) {
        throw new Error(ERROR_MESSAGE.FROM_ONE_TO_FORTYFIVE_ONLY);
      }
    });
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.SIX_DIGITS_ONLY);
    }
    if (new Set(numbers).size < 6) {
      throw new Error(ERROR_MESSAGE.DIFFERENT_DIGITS);
    }
  }

  #initializeResult() {
    return {
      three: 0,
      four: 0,
      five: 0,
      bonusFive: 0,
      six: 0,
    };
  }

  printResult(issuedTickets, bonus) {
    const result = this.#getResult(issuedTickets, bonus);
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${result.three}개
4개 일치 (50,000원) - ${result.four}개
5개 일치 (1,500,000원) - ${result.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.bonusFive}개
6개 일치 (2,000,000,000원) - ${result.six}개`);
    return this.#calculateWinningPrize(result);
  }

  #getResult(issuedTickets, bonus) {
    const result = this.#initializeResult();
    issuedTickets.forEach((issuedNumbers) => {
      const totalMatched = this.#countMatchingNumbers(issuedNumbers);
      const isBonus = issuedNumbers.includes(bonus);
      if (totalMatched === 3) result.three += 1;
      if (totalMatched === 4) result.four += 1;
      if (totalMatched === 5 && !isBonus) result.five += 1;
      if (totalMatched === 5 && isBonus) result.bonusFive += 1;
      if (totalMatched === 6) result.six += 1;
    });
    return result;
  }

  #countMatchingNumbers(issuedNumbers) {
    let totalMatched = 0;
    issuedNumbers.forEach((number) => {
      if (this.#numbers.includes(number)) totalMatched += 1;
    });
    return totalMatched;
  }

  #calculateWinningPrize(result) {
    const { three, four, five, bonusFive, six } = result;
    const prize =
      three * PRIZE.THREE +
      four * PRIZE.FOUR +
      five * PRIZE.FIVE +
      bonusFive * PRIZE.BONUS_FIVE +
      six * PRIZE.SIX;
    return prize;
  }
}

export default Lotto;
