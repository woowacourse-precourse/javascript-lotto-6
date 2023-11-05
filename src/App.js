import { View } from './LottoView.js';
import Lotto from './Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.view = new View();
  }
  async play() {
    const lottoAmount = await this.view.getLottoPerchaseAmount();
    let model = new Lotto(lottoAmount);

    const isValidateLottoAmount = model.validateLottoAmount();
  }
}

export default App;
