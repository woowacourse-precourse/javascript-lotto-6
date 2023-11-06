import Lotto from './Lotto.js';
import lottoRandomNumberGenerator from './util/lottoRandomNumberGenerator.js';

class LottoMachine {
  generateLotto(lottoPrice) {
    const lottoQuantity = this.#calculateQuantity(Number(lottoPrice));
    const lottos = Array.from({ length: lottoQuantity }, () => {
      return new Lotto(this.#generatorRandomNumber()).getAscendingNumber();
    });

    return lottos;
  }

  #generatorRandomNumber() {
    return lottoRandomNumberGenerator.generate();
  }

  #calculateQuantity(lottoPrice) {
    return lottoPrice / 1000;
  }
}

export default LottoMachine;
