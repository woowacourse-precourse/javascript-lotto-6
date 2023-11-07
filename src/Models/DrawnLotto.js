import Lotto from "./Lotto.js";
import DrawnLottoValidator from "../Validator/DrawnLottoValidator.js";
import { LOTTO_SETTINGS } from "../config/gameSetting.js";

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

  setBonusNumber(bonusNumber) {
    const drawnLottoValidator = new DrawnLottoValidator(LOTTO_SETTINGS);
    drawnLottoValidator.validateBonusNumber(this.getNumbers(), bonusNumber);
    this.#bonusNumber = bonusNumber;
  }
}

export default DrawnLotto;
