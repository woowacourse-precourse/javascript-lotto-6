import { Console, Random } from "@woowacourse/mission-utils";

class Output {
  #maxNum = 0;
  #isBonus = false;

  #num3 = 0;
  #num4 = 0;
  #num5notBouns = 0;
  #num5Bouns = 0;
  #num6 = 0;

  #winMoney = 0;

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
    if (this.#maxNum == 3) {
      this.#num3 = 1;
      this.#winMoney = 5000;
    }
    if (this.#maxNum == 4) {
      this.#num4 = 1;
      this.#winMoney = 50000;
    }
    if (this.#maxNum == 5 && this.#isBonus == false) {
      this.#num5notBouns = 1;
      this.#winMoney = 1500000;
    }
    if (this.#maxNum == 5 && this.#isBonus == true) {
      this.#num5Bouns = 1;
      this.#winMoney = 30000000;
    }
    if (this.#maxNum == 6) {
      this.#num6 = 1;
      this.#winMoney = 2000000000;
    }

    return {
      num3: this.#num3,
      num4: this.#num4,
      num5notBouns: this.#num5notBouns,
      num5Bouns: this.#num5Bouns,
      num6: this.#num6,
      winMoney: this.#winMoney,
    };
  }
}

export default Output;
