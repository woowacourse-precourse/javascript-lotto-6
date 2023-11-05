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
   * 주어진 값이 로또에 존재하는지 확인하는 메소드
   * @param {int} number
   * @returns {boolean} is_include
   */
  #is_include(number) {
    return this.#numbers.includes(number);
  }

  /**
   * 주어진 로또와 몇 개의 숫자가 일치하는지 리턴하는 메소드
   * @param {int[]} numbers
   * @returns {int} winning
   */
  get_winning_count(numbers) {
    const WINNING = numbers.reduce(
      (accumulator, current) => accumulator + this.#is_include(current),
      0
    );

    return WINNING;
  }
}

export default Lotto;
