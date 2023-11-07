import { LOTTO_SETTINGS } from "../config/gameSetting";

export default class DrawnLottoValidator {
  // TODO: bonus넘버 1개이상 입력시 에러 추가할것
  static validateBonusNumber(numbers, bonusNumber) {
    const convertedBonumNumber = Number(bonusNumber);
    this.#validateBonusNumberDuplicate(numbers, convertedBonumNumber);
    this.#validateRangeOfPlusNumber(convertedBonumNumber);
    return convertedBonumNumber;
  }

  static #validateBonusNumberDuplicate(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber))
      throw new LottoError("중복된 숫자가 있습니다.");
  }

  static #validateRangeOfPlusNumber(bonusNumber) {
    if (
      bonusNumber < LOTTO_SETTINGS.NUMBER_RANGE.MIN ||
      bonusNumber > LOTTO_SETTINGS.NUMBER_RANGE.MAX
    )
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBER_RANGE.MIN}이상 ${LOTTO_SETTINGS.NUMBER_RANGE.MAX}이하여야 합니다.`
      );
  }
}
