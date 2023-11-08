import { LOTTO_ERROR_MSG, MESSAGE } from "./Utils/Constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(LOTTO_ERROR_MSG.DUPLICATE_NUM);
    }

    if (numbers < 1 || numbers > 45) {
      throw new Error(LOTTO_ERROR_MSG.NUM_RANGE_1TO45);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  calculateLottoRanking(winningNum, bonusNum) {
    const NumberOfMatch = this.calculateNumberOfMatch(winningNum);
    if (NumberOfMatch === 6) {
      return MESSAGE.SIX_MATCH;
    } else if (NumberOfMatch === 5) {
      if (winningNum.includes(bonusNum)) {
        return MESSAGE.BONUS_MATCH;
      }
      return MESSAGE.FIVE_MATCH;
    } else if (NumberOfMatch === 4) {
      return MESSAGE.FOUR_MATCH;
    } else if (NumberOfMatch === 3) {
      return MESSAGE.THREE_MATCH;
    } else return null;
  }

  calculateNumberOfMatch(winningNum) {
    const winningNums = this.getNumbers();
    return winningNum.filter((number) => {
      winningNums.includes(number);
    });
  }
}

export default Lotto;
