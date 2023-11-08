import { INPUT_LENGTH, MAX_NUMBER, MIN_NUMBER } from "./constant/LottoRules";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map((v) => parseInt(v)).sort((a, b) => a - b);
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      if (!/^\d+$/g.test(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자로 입력해야 합니다.");
      }
      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error(
          "[ERROR] 로또 번호는 1~45 사이의 숫자를 입력해야 합니다."
        );
      }
    });

    if (numbers.length !== INPUT_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== INPUT_LENGTH) {
      throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
    }
  }

  getNumber() {
    return this.#numbers;
  }

}

export default Lotto;
