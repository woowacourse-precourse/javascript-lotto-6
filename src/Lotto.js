import {
  MAX_NUMBER,
  MIN_NUMBER,
  MIN_WINNING,
  WINNING_RANKS,
} from "./constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (new Set(numbers).size !== numbers.length)
      throw new Error("[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.");

    numbers.forEach((value) => {
      if (typeof value !== "number" || !Number.isInteger(value))
        throw new Error("[ERROR] 잘못된 형식의 숫자입니다.");
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
  #get_winning_count(winning_lotto) {
    const WINNING = winning_lotto
      .get_numbers()
      .reduce((accum, current) => accum + this.is_include(current), 0);
    return WINNING;
  }

  /**
   * 전달받은 당첨 로또에 대한 등수를 리턴하는 메소드
   *
   * 등수 내에 들지 못한다면 0을 리턴한다.
   * @param {WinningLotto} winning_lotto
   * @returns {int} rank
   */
  get_winning_rank(winning_lotto) {
    const IS_BONUS = this.is_include(winning_lotto.get_bonus());
    const WINNING = IS_BONUS + this.#get_winning_count(winning_lotto);
    if (WINNING < MIN_WINNING) return 0;
    // 보너스 번호에 당첨되지 않은 경우 순위를 높인다.
    if (WINNING === 6) return WINNING_RANKS[WINNING + !IS_BONUS];
    return WINNING_RANKS[WINNING];
  }
}

export default Lotto;
