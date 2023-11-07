import { LottoSettings } from "../config/gameSetting.js";
import LottoError from "../Error/LottoError.js";

export default class LottoValidator {
  constructor() {
    this.setting = new LottoSettings();
  }

  validateNumbers(numbers) {
    this.#validateSize(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
  }

  #validateSize(numbers) {
    const numberPerLotto = this.setting.getNumberPerLotto();
    if (numbers.length !== numberPerLotto) {
      throw new LottoError(`로또 번호는 ${numberPerLotto}개여야 합니다.`);
    }
  }

  #validateDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new LottoError(`중복된 번호가 있습니다.`);
    }
  }

  #validateRange(numbers) {
    const { minOfLottoNumberRange, maxOfLottoNumberRange } =
      this.setting.getLottoNumberRange();
    const isAnyNumberInvalid = numbers.some(
      (number) =>
        number < minOfLottoNumberRange || number > maxOfLottoNumberRange
    );

    if (isAnyNumberInvalid) {
      throw new LottoError(
        `로또 번호는 ${minOfLottoNumberRange}이상 ${maxOfLottoNumberRange}이하여야 합니다.`
      );
    }
  }
}
