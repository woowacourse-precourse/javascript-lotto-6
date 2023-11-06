// import { Console } from '@woowacourse/mission-utils';
// import { printMessage } from './utils/printMessage.js';

// import MESSAGES from './constants/messages.js';
// import Lotto from './Lotto.js';
// import WinningResult from './WinningResult.js';
// import LottoPurchase from './LottoPurchase.js';
// import WinningNumbers from './model/WinningNumbers.js';
// import BonusLottoNumber from './BonusLottoNumber.js';
import LottoGameController from './controller/LottoGameController.js';

class App {
  async play() {
    const lottoGame = new LottoGameController();
    await lottoGame.start();
  }
}

export default App;
