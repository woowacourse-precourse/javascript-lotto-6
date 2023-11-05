class Lotto {
  #numbers;

  get numbers() {
    return this.#numbers;
  }

  set numbers(numbers) {
    this.#numbers = numbers;
  }

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const checkNumberSet = new Set(numbers);

    if (numbers.length !== checkNumberSet.size)
      throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.');

    this.#numbers = numbers.map(num => {
      if (Number.isNaN(+num) || +num < 1 || +num > 45) {
        throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.');
      }
      return +num;
    });

    return this.#numbers;
  }
}

export default Lotto;
