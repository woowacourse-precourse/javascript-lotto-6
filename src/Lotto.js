class Lotto {
  #numbers;
  #bonus_number;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 서로 달라야 합니다.');
    }
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  setBonusNumber(number) {
    this.#bonus_number = number;
  }
}

export default Lotto;
