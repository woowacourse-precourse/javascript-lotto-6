import Lotto from './Lotto.js';
import lottoRandomNumberGenerator from './util/lottoRandomNumberGenerator.js';
import { LOTTO_PRICE_UNIT } from './constants/constant.js';

class LottoMachine {
  generateLottos(lottoPrice) {
    const lottoQuantity = this.#calculateQuantity(lottoPrice);
    const lottos = Array.from({ length: lottoQuantity }, () => {
      return this.#generateSingleLotto();
    });

    return lottos;
  }

  #generateSingleLotto() {
    const randomNumbers = this.#generatorRandomNumber();
    return new Lotto(randomNumbers).getSortNumbers((a, b) => a - b);
  }

  #generatorRandomNumber() {
    return lottoRandomNumberGenerator.generate();
  }

  #calculateQuantity(lottoPrice) {
    return Number(lottoPrice) / LOTTO_PRICE_UNIT;
  }
}

export default LottoMachine;
