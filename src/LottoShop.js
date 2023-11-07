import Lotto from './Lotto.js';
import { LOTTO } from './LottoInfo.js';
import { ERROR } from './LottoMessage.js';
import LottoNumbersGenerator from './RandomNumbersGenerator.js';

class LottoShop {
  #numbersGenerator = new LottoNumbersGenerator();

  sell(amount) {
    this.#validate(amount);
    const lottoCount = amount / LOTTO.price;
    const lottos = this.#createLottos(lottoCount);
    return lottos;
  }

  #createLottos(number) {
    const lottos = Array.from(
      { length: number },
      () => new Lotto(this.#numbersGenerator.generate()),
    );
    return lottos;
  }

  #validate(amount) {
    if (amount % LOTTO.price !== 0) {
      throw new Error(ERROR.notBeDividedByThousand);
    }
  }
}

export default LottoShop;
