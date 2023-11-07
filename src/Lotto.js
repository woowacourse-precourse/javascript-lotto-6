class Lotto {
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const deduplicated = new Set(numbers);

    if (numbers.length !== deduplicated.size) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }
}

export default Lotto;
