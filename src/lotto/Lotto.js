import InputError from "../errors/InputError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 입력되었습니다.");
    }

    numbers.forEach((number) => {
      InputError.checkNonNumeric(number);
      InputError.checkNagativeNumber(number);
      InputError.checkOutOfRangeNumber(number);
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
