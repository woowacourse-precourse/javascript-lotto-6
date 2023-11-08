import Lotto from './Lotto.js';
import { LOTTO } from './LottoInfo.js';
import { ERROR } from './LottoMessage.js';
import LottoNumbersGenerator from './LottoNumbersGenerator.js';

class LottoShop {
  sellTo(purchaser, amount) {
    this.#validate(amount);

    const lottoCount = this.#calculateLottoCount(amount);
    const lottos = this.#createLottos(lottoCount);
    purchaser.purchase(lottos);
  }

  #calculateLottoCount(amount) {
    return amount / LOTTO.price;
  }

  #createLottos(number) {
    const lottos = Array.from(
      { length: number },
      () => new Lotto(LottoNumbersGenerator.generate()),
    );
    return lottos;
  }

  #validate(amount) {
    if (amount === 0) {
      throw new Error(ERROR.falsy);
    }
    if (Number.isNaN(amount)) {
      throw new Error(ERROR.falsy);
    }
    if (amount % LOTTO.price !== 0) {
      throw new Error(ERROR.notBeDividedByThousand);
    }
  }
}

export default LottoShop;
