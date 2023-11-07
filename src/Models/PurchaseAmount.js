import LottoError from "../Error/LottoError.js";
import { LOTTO_SETTINGS } from "../config/gameSetting.js";

export default class PurchaseAmount {
  #amount;

  constructor(inputAmount) {
    const formattedMoney = this.#removeCommaAndDot(inputAmount);
    this.#validateIsNumber(formattedMoney);
    this.#validateIsDevided(formattedMoney);
    this.#amount = Number(formattedMoney);
  }

  #removeCommaAndDot(inputAmount) {
    return inputAmount.replace(/[,.]/g, "");
  }

  #validateIsNumber(inputAmount) {
    if (isNaN(inputAmount)) throw new LottoError(`숫자를 입력해주세요.`);
  }

  #validateIsDevided(inputAmount) {
    if (
      Number(inputAmount) <= 0 ||
      Number(inputAmount) % LOTTO_SETTINGS.TICKET_PRICE !== 0
    ) {
      throw new LottoError(
        `금액은 ${LOTTO_SETTINGS.TICKET_PRICE}단위여야합니다.`
      );
    }
  }

  getAmount() {
    return this.#amount;
  }

  getNumberOfLottos() {
    return this.#amount / LOTTO_SETTINGS.TICKET_PRICE;
  }
}
