import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "../constant/Constant";
import errorMessage from "../constant/ErrorMessage";

/**
 * 입력받은 보너스 번호의 유효성 검사를 하고 형변환 하는 클래스
 */
class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, numbers) {
    this.#validate(bonusNumber, numbers);
    this.#bonusNumber = bonusNumber;
  }

  /**
   * 타입오류, 범위오류, 중복오류 유효성 검사사
   * @param {String} bonusNumber 보너스 번호
   * @param {Array} numbers 당첨 숫자 배열
   */
  #validate(bonusNumber, numbers) {
    if (Number.isNaN(+bonusNumber)) {
      errorMessage.typeError();
    }
    if (+bonusNumber < LOTTO_MIN_NUMBER || +bonusNumber > LOTTO_MAX_NUMBER) {
      errorMessage.numberRangeError();
    }
    if (numbers.includes(bonusNumber)) {
      errorMessage.duplicateError();
    }
  }

  /**
   * 보너스 번호에 대한 형변환을 하는 함수
   * @returns 숫자타입 보너스 번호
   */
  convertNumber() {
    return +this.#bonusNumber;
  }
}

export default BonusNumber;
