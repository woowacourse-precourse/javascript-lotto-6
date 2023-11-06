import { Console } from '@woowacourse/mission-utils';
import { PROPT_MESSAGE } from './constant/lottoConstants';
import LottoMachine from './classes/LottoMachine';
import LottoViewer from './classes/LottoViewer';
import Lotto from './classes/Lotto';

class App {
  async play() {
    const purchaseAmount = await Console.readLineAsync(PROPT_MESSAGE.INPUT_PURCHASE_AMOUNT);
    const lottoMachine = new LottoMachine(purchaseAmount);
    LottoViewer.purchasedLottos(lottoMachine.getLotto());
    const lottoWinningNumber = await Console.readLineAsync(PROPT_MESSAGE.INPUT_WINNING_NUMBER);
    const lottoBonusNumber = await Console.readLineAsync(PROPT_MESSAGE.INPUT_BONUS_NUMBER);
    const lotto = new Lotto(lottoWinningNumber.split(','), lottoBonusNumber);
  }
}

export default App;
