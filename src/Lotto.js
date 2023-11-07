import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    const numbers = this.#setLottoNumbers();
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  #setLottoNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1,45,6);
    return randomNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }

}

export default Lotto;
