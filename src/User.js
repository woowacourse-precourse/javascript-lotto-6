import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO } from "./util/constant.js";

class User {
  #myLottos = [];
  #amount;

  constructor(amount) {
    this.#amount = Number(amount);
  }

  get myLottos() {
    return this.#myLottos;
  }

  set myLottos(lottos) {
    this.#myLottos = lottos;
  }

  // 로또를 생성한다.
  createLottos() {
    const n = this.#amount / LOTTO.price;
    for (let i = 0; i < n; i++) {
      const nums = Random.pickUniqueNumbersInRange(
        LOTTO.minimum,
        LOTTO.maximum,
        LOTTO.numLength
      ).sort((a, b) => a - b);
      this.#myLottos.push(new Lotto(nums));
    }

    return this.#myLottos;
  }

  printLottos() {
    Console.print(`\n${this.#amount / LOTTO.price}개를 구매했습니다.`);
    this.#myLottos.map((lotto) => lotto.print());
  }
}

export default User;
