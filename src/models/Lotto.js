class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if ([...new Set(numbers)].length !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }

    numbers.forEach((number) => {
      if (number > 45 || number < 1) {
        throw new Error('[ERROR] 로또 번호는 1~45 사이의 수 이여야 합니다.');
      }
    });
  }

  #sortNumbers() {
    this.#numbers.sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber
    );
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
