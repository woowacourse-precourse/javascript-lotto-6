import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

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
    const n = this.#amount / 1000;
    for (let i = 0; i < n; i++) {
      const nums = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.#myLottos.push(new Lotto(nums));
    }

    return this.#myLottos;
  }

  printLottos() {
    Console.print(`\n${this.#amount / 1000}개를 구매했습니다.`);
    this.#myLottos.map((lotto) => lotto.print());
  }
}

export default User;
