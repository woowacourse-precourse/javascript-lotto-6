import { Console } from '@woowacourse/mission-utils';
import {
  getBonusNumber,
  getLottoPurchaseAmount,
  getWinningLottoNumbers,
} from './ui/Input.js';
import Lotto from './domain/Lotto.js';

class App {
  constructor() {
    this.lottoPurchaseAmount = 0;
    this.bonusNumber = 0;
    this.winningLotto = [];
  }

  async play() {
    this.lottoPurchaseAmount = await getLottoPurchaseAmount();
  }
}

export default App;
