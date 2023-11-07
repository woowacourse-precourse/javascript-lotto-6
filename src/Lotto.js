import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    const numbers = this.#setLottoNumbers();
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  #setLottoNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1,45,6);
    return randomNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  checkPrizeRank(winnigNumbers, bonusNumber) {
    let prizeRank = 0;
    let matchCount = 0;

    winnigNumbers.forEach(winningNumber => {
      if (this.#numbers.includes(winningNumber)) {
        matchCount++;
      }
    });

    switch(matchCount) {
      case 3: 
        prizeRank = 5;
        break;
      case 4:
        prizeRank = 4;
        break;
      case 5:
        if (this.#numbers.includes(bonusNumber)) {
          prizeRank = 2;
          break;
        }
        prizeRank = 3;
        break;
      case 6:
        prizeRank = 1;
        break;
    }

    return prizeRank;
  }
}

export default Lotto;
