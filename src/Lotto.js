import lottoRanking from "./lottoRanking";
import { ERROR, CONSTANTS } from "./constants";
import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    const numbers = this.#setLottoNumbers();
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== CONSTANTS.LOTTO_NUMBER_LENGTH) {
      throw new Error(`${ERROR.LOTTO_NUMBERS_INVALID_LENGTH}`);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(`${ERROR.LOTTO_NUMBERS_DUPLICATED}`);
    }
  }

  #setLottoNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(CONSTANTS.MIN_LOTTO_NUMBER, CONSTANTS.MAX_LOTTO_NUMBER, CONSTANTS.LOTTO_NUMBER_LENGTH);
    return randomNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  checkLottoRank(winnigNumbers, bonusNumber) {
    let matchCount = 0;
    let bonus = false;

    winnigNumbers.forEach(winningNumber => {
      if (this.#numbers.includes(winningNumber)) {
        matchCount++;
      }
    });

    if (this.#numbers.includes(bonusNumber)) {
      bonus = true;
    }
    
    this.modifyRankingCount(matchCount, bonus);
  }

  modifyRankingCount(matchCount, bonus) {
    switch(matchCount) {
      case 3: 
        lottoRanking.FIFTH.count++;
        break;
      case 4:
        lottoRanking.FOURTH.count++;
        break;
      case 5:
        if (bonus) {
          lottoRanking.SECOND.count++;
          break;
        }
        lottoRanking.THIRD.count++;
        break;
      case 6:
        lottoRanking.FIRST.count++;
        break;
    }
  }

}

export default Lotto;
