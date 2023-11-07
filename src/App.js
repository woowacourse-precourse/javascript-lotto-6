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
    this.lottoTickets = [];
    this.winningLotto = [];
    this.bonusNumber = 0;
    this.profitRate = 0;
    this.lottoResult = {
      fifth: 0,
      forth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
  }

  async play() {
    this.lottoPurchaseAmount = await getLottoPurchaseAmount();
  }
}

export default App;
