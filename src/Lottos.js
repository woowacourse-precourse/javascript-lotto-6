import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./constants/errorMessage.js";
import { RESULT_MESSAGE } from "./constants/resultMessage.js";

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

  printLottos() {
    Console.print(RESULT_MESSAGE.count(this.#lottoPrice / 1000));

    for (let i = 0; i < this.#lottoPrice / 1000; i++) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      lotto = lotto.sort((a, b) => a - b);

      Console.print(`[${lotto.join(", ")}]`);

      this.#lottos.push(lotto);
    }
  }

  getLottos() {
    return this.#lottos;
  }

  getLottoPrice() {
    return this.#lottoPrice;
  }
}

export default Lottos;
