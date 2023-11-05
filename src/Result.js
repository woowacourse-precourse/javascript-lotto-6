import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import { Console } from "@woowacourse/mission-utils";
class Result {
  #winningNumber;
  #bonusNumber;
  #first = 0;
  #second = 0;
  #third = 0;
  #fourth = 0;
  #fifth = 0;
  #FIRST_REWARD = 2000000000;
  #SECOND_REWARD = 30000000;
  #THIRD_REWARD = 1500000;
  #FOURTH_REWARD = 50000;
  #FIFTH_REWARD = 5000;

  constructor() {}

  set winningNumber(winningNumber) {
    this.#winningNumber = new Lotto(winningNumber);
  }

  set bonusNumber(bonusNumber) {
    this.#bonusNumber = new BonusNumber(
      bonusNumber,
      this.#winningNumber.numbers
    );
  }

  getResults(boughtLottos) {
    for (let lotto of boughtLottos) {
      this.getResult(lotto);
    }
  }

  getResult(boughtLotto) {
    let winning = 0;
    let bonus = 0;
    for (let number of boughtLotto.numbers) {
      if (this.#winningNumber.numbers.includes(number)) winning++;
      if (this.#bonusNumber.bonusNumber === number) bonus++;
    }

    if (winning === 6) this.#first++;
    if (winning === 5 && bonus === 1) this.#second++;
    if (winning === 5) this.#third++;
    if (winning === 4) this.#fourth++;
    if (winning === 3) this.#fifth++;
  }

  printStatistics() {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.#fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#first}개`);
  }

  printResult(price) {
    this.printStatistics();
    const TOTAL_REWARD =
      this.#fifth * this.#FIFTH_REWARD +
      this.#fourth * this.#FOURTH_REWARD +
      this.#third * this.#THIRD_REWARD +
      this.#second * this.#SECOND_REWARD +
      this.#first * this.#FIRST_REWARD;
    Console.print(
      `총 수익률은 ${((TOTAL_REWARD / price) * 100).toLocaleString(
        "ko-KR"
      )}%입니다.`
    );
  }
}

export default Result;
