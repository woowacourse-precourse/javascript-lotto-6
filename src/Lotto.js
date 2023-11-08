import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const SET_NUMBERS = new Set(numbers);
    if (SET_NUMBERS.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자를 가질 수 없습니다.");
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.");
      }
    });
  }
}

export default Lotto;
