import PurchaseAmountValidator from "../Validator/PurchaseAmountValidator.js";
import { LottoSettings } from "../config/gameSetting.js";

export default class PurchaseAmount {
  #amount;

  constructor(inputAmount) {
    this.setting = new LottoSettings();

    const formattedMoney = this.#removeCommaAndDot(inputAmount);

    const purchaseAmountValidator = new PurchaseAmountValidator();
    purchaseAmountValidator.validateAmount(formattedMoney);

    this.#amount = Number(formattedMoney);
  }

  #removeCommaAndDot(inputAmount) {
    return inputAmount.replace(/[,.]/g, "");
  }

  getAmount() {
    return this.#amount;
  }

  getNumberOfLottos() {
    const lottoPrice = this.setting.getLottoPrice();
    return this.#amount / lottoPrice;
  }
}
