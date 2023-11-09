import Lotto from '../Lotto.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';
import { LOTTO_RULES, NUMERIC_PATTERN } from '../constants/Rules.js';

export default class WinningNumbers extends Lotto {
  #bonusNumber;

  constructor(winningNumbers) {
    super(winningNumbers);
    this.#bonusNumber = 0;
  }

  /**
   * 입력 받은 보너스 번호의 유효성을 검사하고 저장합니다.
   * @param {number} bonusNumber
   */
  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  /**
   * 보너스 번호를 반환합니다.
   * @returns {number} [보너스 번호]
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }

  /**
   * 보너스 번호의 유효성을 검증합니다.
   * @param {number} bonusNumber
   */
  #validateBonusNumber(bonusNumber) {
    this.#validateNumericOnly(bonusNumber);
    this.#valideIncludeWinningNumbers(bonusNumber);
    this.#validateLottoNumberRange(bonusNumber);
  }

  /**
   * 보너스 번호가 숫자로 이루어져있는지 검증합니다.
   * 숫자로 이루어져 있지 않다면 에러를 발생시킵니다.
   * @param {number} bonusNumber
   */
  #validateNumericOnly(bonusNumber) {
    if (!NUMERIC_PATTERN.test(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.numericOnly);
    }
  }

  /**
   * 당첨 번호에 보너스 번호가 포함되어있는지 검증합니다.
   * 입력한 보너스 번호가 당첨 번호에 포함된다면 에러를 발생시킵니다.
   * @param {number} bonusNumber
   */
  #valideIncludeWinningNumbers(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplication);
    }
  }

  /**
   * 1부터 45 사이의 번호에 포함되어 있는지 검증합니다.
   * 1미만, 45초과의 숫자 입력 시 에러를 발생시킵니다.
   * @param {number} bonusNumber
   */
  #validateLottoNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_RULES.minNumber || bonusNumber > LOTTO_RULES.maxNumber) {
      throw new Error(ERROR_MESSAGE.lottoNumber.notInRange);
    }
  }
}
