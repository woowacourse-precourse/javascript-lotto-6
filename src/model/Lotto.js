import { ERROR_MESSAGE } from "../constatns/message.js";
import { RESULT } from "../constatns/number.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = [0, 0, 0, 0, 0];  // 당첨 결과 저장 배열
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw (ERROR_MESSAGE.WINNING_NUM_COUNT);
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw (ERROR_MESSAGE.NUM_RANGE);
      }
    })
  }

  lottoMatchStart(randomNumbersArray, bonusNumber) {
    randomNumbersArray.forEach((randomNumbers) => {
      let count = this.getMatchNumberCount(randomNumbers);
      let isBonus = this.isBonusNumber(bonusNumber, randomNumbers);
      this.storeResult(count, isBonus);
    })
    return this.result;
  }

  getMatchNumberCount(randomNumbers) {
    let count = randomNumbers.filter((num) =>
      this.#numbers.includes(num)
    ).length;
    return count;
  }

  isBonusNumber(bonusNumber, randomNumbers) {
    return randomNumbers.includes(Number(bonusNumber));
  }

  storeResult(count, isBonus) {
    if (count === 3) this.result[RESULT.THREE] += 1;

    if (count === 4) this.result[RESULT.FOUR] += 1;

    if (count === 5)
      isBonus
        ? this.result[RESULT.FIVE_BONUS] += 1
        : this.result[RESULT.FIVE] += 1;

    if (count === 6) this.result[RESULT.SIX] += 1
  }
}

export default Lotto;
