import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class Lottos {
  #lottoPrice = 0;
  #lottos = [];

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = lottoPrice;
  }

  #validateLottoPrice(lottoPrice) {
    const PRICE_IS_NUMBER_REGEX = /^[1-9]\d*$/;

    if (!PRICE_IS_NUMBER_REGEX.test(lottoPrice)) {
      throw new Error(ERROR_MESSAGE.priceIsNotANumber);
    }

    if (parseInt(lottoPrice, 10) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.priceIsNotDivisible);
    }
  }

  getLottos() {
    return this.#lottos;
  }

  setLottos(lotto) {
    this.#lottos.push(lotto);
  }

  getLottoPrice() {
    return this.#lottoPrice;
  }
}

export default Lottos;
