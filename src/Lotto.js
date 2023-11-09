import { Random } from "@woowacourse/mission-utils";
import { ERRORMESSAGE } from "./constants/errorMessage"
import Validation, { validateLotto } from "./utills/validation";


class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;

    if (numbers !== undefined) {
      this.#validate(numbers);
    }
  }

  #validate(numbers) {
    const result = validateLotto(numbers);
  }

  getNumber() {
    return this.#numbers;
  }

  setAnswer() {
    const set = new Set();
    set.add(Random.pickUniqueNumbersInRange(1, 45, 6));
    return [...set];
  }

  makeLotto(amount) {
    let lotto = [];

    for (let i = 0; i < amount; i++) {
      lotto.push(this.setAnswer());
    }

    const result = this.#validate(lotto);

    return lotto;
  }
}

export default Lotto;
