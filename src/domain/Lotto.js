import {LottoDto} from "./dto/LottoDto.js";

class Lotto {
  /**
   * 로또 가격이 인상되더라도 상수로 만들었기 때문에
   * PRICE 한번만 바꾸면 된다!
   *
   * 1000이라는 리터럴 그대로 사용하지 않기~
   *
   * @type {number}
   */
  static PRICE = 1000;
  /**
   * @type {number[]}
   */
  #numbers;

  /**
   * @param {number[]} numbers
   * @description - 구매한 로또 한장 + 로또 용지에 적힌 번호 저장
   */

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const lottoNums = new Set(numbers);
    if (lottoNums.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복 될 수 없습니다.");
    }
  }

  /**
   * @param {number} bonusNumber
   * @return {boolean}
   * @description 보너스 번호를 갖고있는지 여부 판단
   */
  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  /**
   * @param {number[]} winningNumbers
   * @return {number}
   * @description 당첨 번호랑 몇개나 맞는지 계산
   */
  countIncludingNumbers(winningNumbers) {
    return this.#numbers.filter((n) => winningNumbers.includes(n)).length;
  }

  makeLottoDto() {
    return new LottoDto(this.#numbers);
  }
}

export default Lotto;
