import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #validateDuplicate(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 됩니다.")
    }
  }

  lottoReturn(numbers) {
    return numbers;
  }
}

export default Lotto;
