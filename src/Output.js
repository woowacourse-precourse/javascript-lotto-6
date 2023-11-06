import { Console, Random } from "@woowacourse/mission-utils";

class Output {
  #lotto = [];
  //compareResult = {};
  #maxNum = 0;
  #isBonus = false;

  #num3 = 0;
  #num4 = 0;
  #num5notBouns = 0;
  #num5Bouns = 0;
  #num6 = 0;

  #winMoney = 0;
  #winRate = 0;

  async createLotto() {
    this.#lotto = [];
    while (this.#lotto.length < 6) {
      const random = Random.pickNumberInRange(1, 45);
      if (!this.#lotto.includes(random)) {
        this.#lotto.push(random);
      }
    }
    this.#lotto.sort((a, b) => a - b);
    return this.#lotto;
  }

  calcLottoResult(compareResult, inputMoney) {
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
    Console.print(this.#maxNum);
    Console.print(this.#isBonus);

    this.printResult(inputMoney);
  }

  printResult(inputMoney) {
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
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.#num3}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#num4}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#num5notBouns}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#num5Bouns}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#num6}개`);

    const rate = (this.#winMoney / inputMoney) * 100;
    this.#winRate = Math.round(rate * 100) / 100;
    Console.print(`총 수익률은 ${this.#winRate}%입니다.`);
  }
}

export default Output;
