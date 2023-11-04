class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Number.parseInt(numbers)) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.some(number => number > 45)) {
      throw new Error("[ERROR] 로또 번호는 45이하의 숫자여야 합니다.");
    }
  }

  #validateBonus(bonus) {
    if (typeof bonus !== 'number') {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    if (bonus > 45 || bonus < 1) {
      throw new Error("[ERROR] 로또 번호는 45이하의 숫자여야 합니다.");
    }

    if ((this.#numbers).includes(bonus)) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
  }

  setBonus(bonus) {
    this.#validateBonus(bonus)
    this.#numbers.push(bonus);
  }

  getWinningNumbers() {
    return this.#numbers.slice(0,6);
  }

  getBonus() {
    return this.#numbers[6];
  }
}

export default Lotto;
