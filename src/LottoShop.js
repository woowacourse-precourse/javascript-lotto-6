import Lotto from './Lotto.js';
import { ERROR } from './Message.js';
import LottoNumbersGenerator from './RandomNumbersGenerator.js';

class LottoShop {
  #LOTTO_PRICE = 1000;
  #ZERO = 0;

  #numbersGenerator = new LottoNumbersGenerator();

  sell(amount) {
    this.#validate(amount);
    const numberOfLottos = amount / this.#LOTTO_PRICE;
    const lottos = this.#createLottos(numberOfLottos);
    return lottos;
  }

  #createLottos(number) {
    const lottos = Array.from(
      { length: number },
      () => new Lotto(this.#numbersGenerator.generate()),
    );
    return lottos;
  }

  #validate(value) {
    if (value % this.#LOTTO_PRICE !== this.#ZERO) {
      throw new Error(ERROR.notBeDividedByThousand);
    }
  }
}

export default LottoShop;
