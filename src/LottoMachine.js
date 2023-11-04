import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

export class LottoMachine {
  constructor(PAYMENT) {
    this.#validate(PAYMENT);
    this.quantity = PAYMENT / 1000;
    this.inventory = [];
    this.#fillInventory(this.quantity);
    this.prize = [0, 0, 0, 0, 0];
  }

  #validate(PAYMENT) {
    if (PAYMENT % 1000 !== 0) {
      throw new Error("[ERROR] 지불 비용은 1000원으로 나누어 떨어져야 합니다");
    }
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
    for (let cnt = 0; cnt < this.quantity; cnt++) {
      this.inventory[cnt].printNumbers();
    }
  }

  machinePrize(NUMBER_GUESS, NUMBER_BONUS) {
    for (let cnt = 0; cnt < this.quantity; cnt++) {
      let NUMBER_CORRECT = this.inventory[cnt].calcGuess(NUMBER_GUESS);
      let IS_BONUS = this.inventory[cnt].isBonus(NUMBER_BONUS);
      console.log(IS_BONUS);
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
}
