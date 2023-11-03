import AppError from "./AppError";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new AppError("로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new AppError("중복된 로또 번호가 존재합니다.");
    }
  }

  getInformation() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
