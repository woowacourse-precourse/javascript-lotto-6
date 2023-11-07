import { MAX_NUMBER, MIN_NUMBER } from "./constants";

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
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.");
    }
    numbers.forEach((value) => {
      if (value < MIN_NUMBER || value > MAX_NUMBER)
        throw new Error(
          `[ERROR] 로또 번호는 ${MIN_NUMBER} ~ ${MAX_NUMBER} 사이 숫자만 가능합니다.`
        );
    });
  }

  /**
   * @returns {int[]}
   */
  get_numbers() {
    return this.#numbers;
  }

  /**
   * 주어진 값이 로또에 존재하는지 확인하는 메소드
   * @param {int} number
   * @returns {boolean} is_include
   */
  is_include(number) {
    return this.#numbers.includes(number);
  }

  /**
   * 주어진 당첨 로또와 몇 개의 숫자가 일치하는지 리턴하는 메소드
   * @param {WinningLotto} winning_lotto
   * @returns {int} winning - 일치하는 번호 갯수
   */
  get_winning_count(winning_lotto) {
    const WINNING = winning_lotto
      .get_numbers()
      .reduce((accum, current) => accum + this.is_include(current), 0);
    return WINNING;
  }
}

export default Lotto;
