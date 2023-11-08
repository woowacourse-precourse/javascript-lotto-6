import lottoRanking from "./lottoRanking";
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
    
    return this.modifyRankingCount(matchCount, bonus);
  }

  modifyRankingCount(matchCount, bonus) {
    switch(matchCount) {
      case 3: 
        lottoRanking.FIFTH.count++;
        return 5;
      case 4:
        lottoRanking.FOURTH.count++;
        return 4;
      case 5:
        if (bonus) {
          lottoRanking.SECOND.count++;
          return 2;
        }
        lottoRanking.THIRD.count++;
        return 3;
      case 6:
        lottoRanking.FIRST.count++;
        return 1;
    }
  }

}

export default Lotto;
