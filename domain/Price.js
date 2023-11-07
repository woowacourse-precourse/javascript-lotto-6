import { ERROR } from "../src/const/error";

class CheckPrice {
  #lottoPrice = 0;
  #lottos = [];

  constructor(priceOfLotto) {
    this.#validate(priceOfLotto);
    this.#lottoPrice = priceOfLotto;
  }

  #validate(priceOfLotto) {

    if (isNaN(Number(priceOfLotto))) {
      throw new Error(ERROR.NAN);
    }

    if (parseInt(priceOfLotto) % 1000 !== 0) {
      throw new Error(ERROR.THOUSAND);
    }
  }

//   getLottos() {
//     return this.#lottos;
//   }

//   setLottos(lotto) {
//     this.#lottos.push(lotto);
//   }

//   getLottoPrice() {
//     return this.#lottoPrice;
//   }
}

export default CheckPrice;