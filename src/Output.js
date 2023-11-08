import { Console, Random } from "@woowacourse/mission-utils";

class Output {
  #maxNum = 0;
  #isBonus = false;

  createLotto(trialNum, totalLotto) {
    for (let i = 0; i < trialNum; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      totalLotto.push(lotto);
    }
    for (let lotto of totalLotto) {
      const sortedLotto = lotto.sort((a, b) => a - b);
      Console.print(`[${sortedLotto.join(", ")}]`);
    }
    return totalLotto;
  }

  calcLottoResult(compareResult) {
    compareResult.forEach((lotto) => {
      if (lotto.sameNum > this.#maxNum) {
        this.#maxNum = lotto.sameNum;
      }
    });
    compareResult.forEach((lotto) => {
      if (this.#maxNum == 5 && lotto.sameBonus == true) {
        this.#isBonus = true;
      }
    });
  }

  printLottoResult() {
    return {
      num3: this.#maxNum === 3 ? 1 : 0,
      num4: this.#maxNum === 4 ? 1 : 0,
      num5notBouns: this.#maxNum === 5 && !this.#isBonus ? 1 : 0,
      num5Bouns: this.#maxNum === 5 && this.#isBonus ? 1 : 0,
      num6: this.#maxNum === 6 ? 1 : 0,
      winMoney:
        this.#maxNum === 3
          ? 5000
          : this.#maxNum === 4
          ? 50000
          : this.#maxNum === 5 && !this.#isBonus
          ? 1500000
          : this.#maxNum === 5 && this.#isBonus
          ? 30000000
          : this.#maxNum === 6
          ? 2000000000
          : 0,
    };
  }
}

export default Output;
