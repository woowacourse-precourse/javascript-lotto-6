import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

export class LottoMachine {
  constructor(PAYMENT) {
    this.quantity = PAYMENT / 1000;
    this.inventory = [];
    this.#fillInventory(this.quantity);
    this.prize = [0, 0, 0, 0, 0];
  }

  #generateLotto() {
    const RAND_NUMS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const newLotto = new Lotto(RAND_NUMS);
    return newLotto;
  }

  #fillInventory(quantity) {
    for (let i = 0; i < quantity; i++) {
      this.inventory.push(this.#generateLotto());
    }
  }

  printInventory() {
    for (let lotto of this.inventory) {
      lotto.printNumbers();
    }
  }

  calcPrize(NUMBER_GUESS, NUMBER_BONUS) {
    for (let cnt = 0; cnt < this.quantity; cnt++) {
      let NUMBER_CORRECT = this.inventory[cnt].calcGuess(NUMBER_GUESS);
      let IS_BONUS = this.inventory[cnt].isBonus(NUMBER_BONUS);
      this.#addPrize(NUMBER_CORRECT, IS_BONUS);
    }
  }

  #addPrize(NUMBER_CORRECT, IS_BONUS) {
    if (NUMBER_CORRECT === 3) {
      this.prize[0]++;
    }
    if (NUMBER_CORRECT === 4) {
      this.prize[1]++;
    }
    if (NUMBER_CORRECT === 5 && IS_BONUS == false) {
      this.prize[2]++;
    }
    if (NUMBER_CORRECT === 5 && IS_BONUS == true) {
      this.prize[3]++;
    }
    if (NUMBER_CORRECT === 6) {
      this.prize[4]++;
    }
  }

  printResult() {
    MissionUtils.Console.print("\n당첨 통계\n___");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.prize[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.prize[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.prize[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.prize[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.prize[4]}개`
    );
  }
}
