import lottoNumberGenerator from '../utils/lottoNumberGenerator.js';
import Lotto from '../Lotto.js';

class LottoBundle {
  #lottoList;

  constructor(quantity) {
    this.#buyLotto(quantity);
  }

  #buyLotto(quantity) {
    this.#lottoList = Array.from({ length: quantity }, () => new Lotto(lottoNumberGenerator()));
  }
}

export default LottoBundle;
