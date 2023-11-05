import { Random } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.#validate(numbers);
    this.#numbers = numbers;
  }

  #lottoGenerator() {
    const LOTTO = [];
    while (LOTTO.length < LOTTO_LENGTH) {
      const RANDOM_NUMBER = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      if (!LOTTO.includes(RANDOM_NUMBER)) LOTTO.push(RANDOM_NUMBER);
    }
    return LOTTO.sort((a, b) => a - b);
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  returnLotto(input) {
    const LOTTO_LIST = [];
    let count = 0;

    while (count < input) {
      const LOTTO = this.#lottoGenerator();
      LOTTO_LIST.push(LOTTO);
      count++;
    }

    return LOTTO_LIST;
  }
}

export default Lotto;
