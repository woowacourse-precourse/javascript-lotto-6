import LottoError from "../Error/LottoError.js";
import { LottoSettings } from "../config/gameSetting.js";

export default class PurchaseAmountValidator {
  constructor() {
    this.setting = new LottoSettings();
  }

  validateAmount(amount) {
    this.#validateIsNumber(amount);
    this.#validateIsDevided(amount);
  }

  #validateIsNumber(inputAmount) {
    if (isNaN(inputAmount)) throw new LottoError(`구입금액은 숫자여야합니다.`);
  }

  #validateIsDevided(inputAmount) {
    const lottoPrice = this.setting.getLottoPrice();
    if (Number(inputAmount) <= 0 || Number(inputAmount) % lottoPrice !== 0) {
      throw new LottoError(`금액은 ${lottoPrice}단위여야합니다.`);
    }
  }
}
