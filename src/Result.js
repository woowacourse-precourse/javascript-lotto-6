import { PRIZE, RANK } from "./constants/rule.js";

class Result {
  constructor(lottos, userLotto, bonus) {
    this.result = [];
    this.calculateResult(lottos, userLotto, bonus);
  }

  calculateResult(lottos, userLotto, bonus) {
    lottos.forEach((lotto) => {
      const count = this.calculateEachLotto(lotto, userLotto);
      const isBonus = this.calculateBonus(lotto, bonus);
      const prize = this.calculatePrize(count, isBonus);
      this.saveEachResult(count, isBonus, prize);
    });
  }

  calculateEachLotto(lotto, userLotto) {
    let count = 0;

    lotto.forEach((value) => {
      if (userLotto.includes(value)) {
        count += 1;
      }
    });

    return count;
  }

  calculateBonus(lotto, bonus) {
    return lotto.includes(bonus);
  }

  saveEachResult(count, isBonus, prize) {
    const data = {
      count,
      isBonus,
      prize,
    };

    this.result.push(data);
  }

  calculatePrize(count, isBonus) {
    if (count === RANK.FIRST) {
      return PRIZE.FIRST;
    } else if (count === RANK.SECOND && isBonus) {
      return PRIZE.SECOND;
    } else if (count === RANK.THIRD && !isBonus) {
      return PRIZE.THIRD;
    } else if (count === RANK.FOURTH) {
      return PRIZE.FOURTH;
    } else if (count === RANK.FIFTH) {
      return PRIZE.FIFTH;
    } else {
      return 0;
    }
  }
}

export default Result;
