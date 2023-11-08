import { Random } from '@woowacourse/mission-utils';
import OutputView from "../View/OutputView.js";
import Lotto from './Lotto.js';

class LottoMachine {
  constructor() {
    this.lottoNumbersArray = [];
    this.outputView = new OutputView();
  }
  
  calculateLottoCount(amount) {
    return Math.floor(amount / 1000);
  }

  generateLottoNumbers(lottoCount) {
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottos = new Lotto(lottoNumbers);
      const lottoSortNumbers = lottos.getLottoNumbers(lottoNumbers);

      this.lottoNumbersArray.push(lottoSortNumbers);
    }

    return this.lottoNumbersArray;
  }
}

export default LottoMachine;
