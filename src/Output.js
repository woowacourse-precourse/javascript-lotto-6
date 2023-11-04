import { Console, Random } from "@woowacourse/mission-utils";

class Output {
  #lotto = [];

  createLotto() {
    this.#lotto = [];
    for (let r = 0; r < 6; r++) {
      const random = Random.pickNumberInRange(1, 45);
      this.#lotto.push(random);
    }
    return this.#lotto;
  }
}

export default Output;
