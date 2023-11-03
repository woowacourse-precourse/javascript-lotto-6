import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

export class LottoMachine {
  constructor(PAYMENT) {
    this.#validate(PAYMENT);
    this.quantity = PAYMENT / 1000;
    this.inventory = [];
    this.#fillInventory(this.quantity);
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
}
