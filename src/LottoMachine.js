import Lotto from './Lotto.js';
import lottoRandomNumberGenerator from './util/lottoRandomNumberGenerator.js';

class LottoMachine {
  generateLotto(lottoPrice) {
    const lottoQuantity = this.#calculateQuantity(lottoPrice);
    const lottos = Array.from({ length: lottoQuantity }, () => {
      return this.#generateSingleLotto();
    });

    return lottos;
  }

  #generateSingleLotto() {
    return new Lotto(this.#generatorRandomNumber()).getAscendingNumber();
  }

  #generatorRandomNumber() {
    return lottoRandomNumberGenerator.generate();
  }

  #calculateQuantity(lottoPrice) {
    return Number(lottoPrice) / 1000;
  }
}

export default LottoMachine;
