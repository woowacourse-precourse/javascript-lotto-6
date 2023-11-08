import { LOTTO } from './constant/LottoInfo.js';
import { ERROR } from './constant/LottoMessage.js';
import Lotto from './Lotto.js';
import LottoNumbersGenerator from './LottoNumbersGenerator.js';

class LottoShop {
  static sellTo(purchaser, amount) {
    LottoShop.#validate(amount);

    const lottoCount = LottoShop.#calculateLottoCount(amount);
    const lottos = LottoShop.#createLottos(lottoCount);
    purchaser.purchase(lottos);
  }

  static #calculateLottoCount(amount) {
    return amount / LOTTO.price;
  }

  static #createLottos(number) {
    const lottos = Array.from(
      { length: number },
      () => new Lotto(LottoNumbersGenerator.generate()),
    );
    return lottos;
  }

  static #validate(amount) {
    if (Number.isNaN(amount) || amount === 0) {
      throw new Error(ERROR.positiveNumber);
    }

    if (amount % LOTTO.price !== 0) {
      throw new Error(ERROR.canDividedByPrice);
    }
  }
}

export default LottoShop;
