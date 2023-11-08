import { LottoSettings } from "../config/gameSetting.js";
import LottoError from "../Error/LottoError.js";

export default class DrawnLottoValidator {
  constructor() {
    this.setting = new LottoSettings();
  }

  validateBonusNumber(numbers, bonusNumber) {
    const convertedBonumNumber = Number(bonusNumber);
    this.#validateBonusNumbIsNan(convertedBonumNumber);
    this.#validateBonusNumberDuplicate(numbers, convertedBonumNumber);
    this.#validateRangeOfPlusNumber(convertedBonumNumber);
    return convertedBonumNumber;
  }

  #validateBonusNumberDuplicate(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber))
      throw new LottoError("보너스 번호가 당첨번호와 중복됩니다.");
  }

  #validateRangeOfPlusNumber(bonusNumber) {
    const { minOfLottoNumberRange, maxOfLottoNumberRange } =
      this.setting.getLottoNumberRange();

    if (
      bonusNumber < minOfLottoNumberRange ||
      bonusNumber > maxOfLottoNumberRange
    )
      throw new LottoError(
        `로또 번호는 ${minOfLottoNumberRange}이상 ${maxOfLottoNumberRange}이하여야 합니다.`
      );
  }

  #validateBonusNumbIsNan(bonusNumber) {
    if (isNaN(bonusNumber))
      throw new LottoError(`보너스 번호는 숫자만 입력이 가능합니다.`);
  }
}
