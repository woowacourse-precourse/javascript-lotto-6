class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 로또 번호를 검증합니다. (6개, 중복 X)
   * @param {number[]} numbers
   */
  #validate(numbers) {
    numbers.forEach((num) => {
      if (isNaN(num) || !Number.isInteger(num) || num < 1 || num > 45) {
        throw new Error('[ERROR] 숫자는 1~45 사이의 정수만 입력해야 합니다.');
      }
    });

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.some((num, index) => numbers.indexOf(num) !== index)) {
      throw new Error('[ERROR] 당첨 번호에 중복된 숫자가 있습니다.');
    }
  }

  /**
   * 해당 숫자를 포함하는지 여부를 반환합니다
   * @param {number} number
   * @return {boolean} 포함 여부 */
  contains(number) {
    return this.#numbers.includes(number);
  }

  /**
   * 다른 로또와 일치하는 개수를 반환합니다
   * @param {Lotto} target
   * @return {number} 일치하는 개수 */
  matchCount(target) {
    return this.#numbers.filter((number) => target.contains(number)).length;
  }

  /**
   * 로또 배열을 문자열로 반환합니다
   * @return {string} */
  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
