import { WINNINGS } from '../lib/constant.js';
import { ERROR } from '../lib/Prompt.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    this.#validatePattern(numbers.join(','));
    this.#validateLength(numbers);
    this.#validateRange(numbers);
    this.#validateDuplicate(numbers);
  }

  #validatePattern(numbers) {
    const PATTERN = /^(\d+,\d+,\d+,\d+,\d+,\d+)$/;
    if (!PATTERN.test(numbers)) throw new Error(ERROR.invalidValue); // 당첨번호가 잘못됨
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR.length); // 당첨 번호 : 길이 검사
  }

  #validateRange(numbers) {
    const callback = num => num >= 1 && num <= 45;
    if (!numbers.every(callback)) throw new Error(ERROR.outOfRange); // 당첨 번호 : 값 검사
  }

  #validateDuplicate(numbers) {
    const NUMBER_TO_SET = new Set(numbers);
    if (NUMBER_TO_SET.size !== numbers.length) throw new Error(ERROR.duplicate); // 당첨 번호 : 중복 검사
  }

  // getter
  get getWinNumber() {
    return this.#numbers;
  }

  /**
   * 결과 내기
   * input : 유저로또배열, 보너스번호
   * output : [[맞는 번호수, 보너스 번호여부]]
   */
  lot(userLotto, bonus) {
    const SAME = this.#numbers.filter(item => userLotto.includes(item)).length;
    const IS_BONUS = userLotto.includes(bonus);

    return [SAME, Number(IS_BONUS)];
  }

  /**
   * 등수 카운트
   * Input : lot 메서드 결과
   * output : 등수별 개수
   */
  lotCount(results) {
    let withoutBonus = [0, 0, 0, 0];
    let bonus = 0;

    results.forEach(item => (item[0] > 2 ? withoutBonus[item[0] - 3]++ : null));
    results.forEach(item => (item[0] === 5 && item[1] ? bonus++ : null));

    withoutBonus[2] -= bonus;
    withoutBonus.splice(3, 0, bonus);

    return withoutBonus;
  }

  /**
   * 수익률 계산
   * input : lotCount 결과, 구입금액
   * output : 수익률
   */
  calculateReturnRate(cntArr, money) {
    const WIN_ARR = cntArr.map((item, idx) => item * WINNINGS[idx]);
    const TOTAL = WIN_ARR.reduce((acc, curr) => acc + curr, 0);
    const returnRate = (TOTAL / money) * 100;
    return returnRate.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 소수점 둘째 자리에서 반올림하고 100.0으로 포맷
  }
}

export default Lotto;
