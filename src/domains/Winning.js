import {
  checkBonusDuplicate,
  checkDuplicate,
  checkNumberInRange,
  checkSixNumbers,
} from '../utils/validate.js';

class Winning {
  #numbers;
  #bonus;

  /**
   * @param {number[]} numbers 당첨번호
   * @param {number} bonus 보너스번호
   */
  constructor(numbers, bonus) {
    this.#validate(numbers, bonus);
    this.#numbers = numbers;
    this.#bonus = bonus;
  }

  /**
   * 유효성 검사
   * @param {number[]} numbers
   * @param {number} bonus
   */
  #validate(numbers, bonus) {
    checkSixNumbers(numbers);
    numbers.forEach((number) => checkNumberInRange(number));
    checkDuplicate(numbers);

    checkNumberInRange(bonus);
    checkBonusDuplicate(numbers, bonus);
  }

  /**
   * 로또 번호와 당첨 번호 비교하는 함수
   * @param {number[]} lotto 로또 번호
   * @returns {string} 일치 개수 문자열 형태로 리턴, 보너스 일치시 '5+1' 리턴
   */
  compareLotto(lotto) {
    let count = 0;
    lotto.forEach((number) => {
      if (this.#numbers.includes(number)) count += 1;
    });

    if (count === 5 && lotto.includes(this.#bonus)) return `${count}+1`;
    return `${count}`;
  }
}

export default Winning;
