import { INDEX, PRIZE, RANK, UNIT } from "./constants/rule";

class Result {
  #result;
  #statistics;

  constructor(lottos, userLotto, bonus) {
    this.#result = [];
    this.#calculateResult(lottos, userLotto, bonus);
    this.#statistics = Array.from({ length: RANK.LENGTH }).fill(0);
  }

  #calculateResult(lottos, userLotto, bonus) {
    lottos.forEach((lotto) => {
      const count = this.#calculateEachLotto(lotto, userLotto);
      const isBonus = this.#calculateBonus(lotto, bonus);
      const prize = this.#calculatePrize(count, isBonus);
      this.#saveEachResult(count, isBonus, prize);
    });
  }

  #calculateEachLotto(lotto, userLotto) {
    let count = 0;

    lotto.forEach((value) => {
      if (userLotto.includes(value)) {
        count += 1;
      }
    });

    return count;
  }

  #calculateBonus(lotto, bonus) {
    return lotto.includes(bonus);
  }

  #saveEachResult(count, isBonus, prize) {
    const data = {
      count,
      isBonus,
      prize,
    };

    this.#result.push(data);
  }

  #calculatePrize(count, isBonus) {
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

  getStatistics() {
    this.#result.forEach((each) => {
      this.#calculateStatistics(each);
    });

    return this.#statistics;
  }

  #calculateStatistics(result) {
    if (result.count === RANK.FIRST) {
      this.#statistics[INDEX.FIRST_RANK] += 1;
    } else if (result.count === RANK.SECOND && result.isBonus) {
      this.#statistics[INDEX.SECOND_RANK] += 1;
    } else if (result.count === RANK.THIRD && !result.isBonus) {
      this.#statistics[INDEX.THIRD_RANK] += 1;
    } else if (result.count === RANK.FOURTH) {
      this.#statistics[INDEX.FOURTH_RANK] += 1;
    } else if (result.count === RANK.FIFTH) {
      this.#statistics[INDEX.FIFTH_RANK] += 1;
    }
  }

  getEarningRate(sum) {
    const earningRate = this.#calculateEarningRate(sum);
    return earningRate;
  }

  #calculateEarningRate(sum) {
    const sumOfPrize = this.#calculateSumOfPrize();
    const earningRate = (sumOfPrize / sum) * 100;
    const fixedEarningRate = earningRate.toFixed(1);
    return fixedEarningRate;
  }

  #calculateSumOfPrize() {
    const sumOfPrize = this.#result.reduce((acc, curr) => {
      return acc + curr.prize;
    }, 0);

    return sumOfPrize;
  }
}

export default Result;
