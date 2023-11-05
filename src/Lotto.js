class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.includes(NaN)) {
      throw new Error('[ERROR] 유효하지 않은 입력입니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }

    if (numbers.some((number) => number > 45 || number < 1)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.');
    }
  }

  #validateBonus(bonus) {
    if (isNaN(bonus)) {
      throw new Error('[ERROR] 유효하지 않은 입력입니다.');
    }

    if (bonus > 45 || bonus < 1) {
      throw new Error('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.');
    }

    if (this.#numbers.includes(bonus)) {
      throw new Error('[ERROR] 이미 입력된 숫자입니다.');
    }
  }

  setBonus(bonus) {
    this.#validateBonus(bonus);
    this.#numbers.push(bonus);
  }

  getWinningNumbers() {
    return this.#numbers.slice(0, 6);
  }

  getBonus() {
    return this.#numbers[6];
  }
}

export default Lotto;
