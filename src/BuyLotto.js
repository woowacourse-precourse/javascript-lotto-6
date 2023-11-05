import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR, LOTTO, OUTPUT_MESSAGE } from './Constant';

class BuyLotto {
  #price;
  #lottos;

  constructor(price) {
    this.#validatePrice(price);
    this.#price = Number(price);
    this.#lottos = [];
    this.#setLottos();
  }

  #validatePrice(price) {
    if (!price || !price.trim || LOTTO.REG_NUMBER.test(price)) {
      throw new Error(ERROR.INPUT_ONLY_NUMBER);
    }
    if (Number(price) % LOTTO.PRICE > 0) {
      throw new Error(ERROR.NOT_PRICE_UNIT);
    }
  }

  #getLottoQuantity() {
    return this.#price / LOTTO.PRICE;
  }

  #setLottos() {
    const quantity = this.#getLottoQuantity();
    for (let i = 0; i < quantity; i++) {
      this.#lottos.push(this.#setLottoNumbers());
    }
  }

  #setLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.LOTTO_LENGHT,
    );
    return lottoNumbers.sort((a, b) => a - b);
  }

  #printPurchasedLotto() {
    let message = `${this.#lottos.length}${
      OUTPUT_MESSAGE.PRINT_PURCHASE_QUANTITY
    }`;
    this.#lottos.forEach(lotto => {
      message += `[${lotto}]\n`;
    });
    Console.print(
      message.replaceAll(OUTPUT_MESSAGE.COMMA, `${OUTPUT_MESSAGE.COMMA} `),
    );
  }

  getLottos() {
    this.#printPurchasedLotto();
    return this.#lottos;
  }
}

export default BuyLotto;
