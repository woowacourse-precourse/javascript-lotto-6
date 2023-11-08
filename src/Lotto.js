import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateIsNum(numbers);
    this.#validateDuplicate(numbers);
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateIsNum(numbers) {
    numbers.forEach((element) => {
      if (isNaN(element)) {
        throw new Error("[ERROR] 숫자를 입력해 주세요.");
      }
    });
  }

  #validateDuplicate(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 됩니다.");
    }
  }

  lottoReturn(numbers) {
    return numbers;
  }
}

export default Lotto;
