import { LOTTO_NUMBER_COUNT } from "./constant/LottoInfo.js";
class Lotto {
  // # prefix를 변경할 수 없다.
  // 필드를 추가할 수 없다.
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateCount(numbers);
  }
  #validateCount(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  #validateString(numbers) {
    numbers.array.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 자연수");
      }
    });
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
