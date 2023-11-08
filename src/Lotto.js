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
  }

  /**
   * 해당 숫자를 포함하는지 여부를 반환합니다
   * @param {number} number
   * @return {boolean} 포함 여부 */
  contains(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
