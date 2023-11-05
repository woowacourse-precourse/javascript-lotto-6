import { ERROR_MESSAGE, PRICE } from "../constant/lottoConstants";

class LottoMachine {
  constructor(purchaseAmount) {
    this.#validator(purchaseAmount);
  }

  #validator(purchaseAmount) {
    if (Number.isNaN(Number(purchaseAmount))) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }

    if (purchaseAmount % PRICE.LOTTO !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVISIBLE);
    }
  }
}

export default LottoMachine;
