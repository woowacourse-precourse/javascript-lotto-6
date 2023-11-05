import InputError from "./InputError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new InputError("로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((number) => this.#checkRange(number));
    if (new Set(numbers).size !== 6)
      throw new InputError("중복된 수가 존재하면 안됩니다.");
  }

  // TODO: 추가 기능 구현
  #checkRange(number) {
    if (number < 1 || number > 45)
      throw new InputError("로또 번호는 1에서 45 사이의 수 입니다.");
  }
}

export default Lotto;
