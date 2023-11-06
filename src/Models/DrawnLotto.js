import Lotto from "./Lotto.js";
import LottoError from "../Error/LottoError.js";
import LOTTO_SETTINGS from "../config/gameSetting.js";

class DrawnLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getFullNumbers() {
    const drawnLottoNumbers = this.getNumbers();
    const bonusNumber = this.getBonusNumber();

    return { drawnLottoNumbers, bonusNumber };
  }

  #validatePlusNumber(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber))
      throw new LottoError("중복된 숫자가 있습니다.");
  }

  #validateRangeOfPlusNumber(bonusNumber) {
    if (
      bonusNumber < LOTTO_SETTINGS.NUMBER_RANGE.MIN ||
      bonusNumber > LOTTO_SETTINGS.NUMBER_RANGE.MAX
    )
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBER_RANGE.MIN}이상 ${LOTTO_SETTINGS.NUMBER_RANGE.MAX}이하여야 합니다.`
      );
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = this.#validateBonusNumber(bonusNumber);
  }

  // TODO: bonus넘버 1개이상 입력시 에러 추가할것
  #validateBonusNumber(bonusNumber) {
    const convertedBonumNumber = Number(bonusNumber);
    this.#validatePlusNumber(convertedBonumNumber);
    this.#validateRangeOfPlusNumber(convertedBonumNumber);
    return convertedBonumNumber;
  }
}

export default DrawnLotto;
