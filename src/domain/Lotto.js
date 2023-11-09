import {LottoDto} from "./dto/LottoDto.js";
import {ERROR} from "../constants/constants.js";

class Lotto {
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
      throw new Error(ERROR.LOTTO_LENGTH_ERROR);
    }
    const lottoNums = new Set(numbers);
    if (lottoNums.size !== numbers.length) {
      throw new Error(ERROR.LOTTO_DUPLICATE_ERROR);
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
  countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter((n) => winningNumbers.includes(n)).length;
  }

  makeLottoDto() {
    return new LottoDto(this.#numbers);
  }
}

export default Lotto;
