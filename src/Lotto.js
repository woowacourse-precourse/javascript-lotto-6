class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #numbersLenNotSix() {
    if (this.#numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호 여섯개를 입력해 주세요.');
    }
  }

  #numbersNotNum() {
    if (this.#numbers.some((number) => Number.isNaN(Number(number)))) {
      throw new Error('[ERROR] 당첨 번호를 숫자로 입력해 주세요.');
    }
  }

  #numbersBlank() {
    if (this.#numbers.some((number) => number.trim() === '')) {
      throw new Error('[ERROR] 당첨 번호를 공백이 아닌 숫자를 입력해 주세요.');
    }
  }

  #numbersDuplication() {
    const SET_NUMBERS = new Set(this.#numbers);
    if (this.#numbers.length !== SET_NUMBERS.size) {
      throw new Error('[ERROR] 당첨 번호를 중복 없이 입력해 주세요.');
    }
  }

  #numbersOverRange() {
    if (this.#numbers.some((number) => Number(number) < 1 || Number(number) > 45)) {
      throw new Error('[ERROR] 당첨 번호를 1~45 사이의 값으로 입력해 주세요.');
    }
  }

  #validate(numbers) {
    this.#numbers = numbers;
    this.#numbersLenNotSix();
    this.#numbersNotNum();
    this.#numbersBlank();
    this.#numbersDuplication();
    this.#numbersOverRange();
  }
}

export default Lotto;
