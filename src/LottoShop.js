import Lotto from './Lotto.js';
import LottoNumbersGenerator from './RandomNumbersGenerator.js';

class LottoShop {
  #LOTTO_PRICE = 1000;

  #numbersGenerator = new LottoNumbersGenerator();

  sell(amount) {
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
}

export default LottoShop;
