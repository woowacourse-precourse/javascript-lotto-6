import {Random} from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor (numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate (numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  getNumbers() {
    return this.#numbers;
  }

  static create_lotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(randomNumbers);
  }
  static create_multiple_lottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(Lotto.create_lotto());
    }
    return lottos;
  }

}

export default Lotto;
