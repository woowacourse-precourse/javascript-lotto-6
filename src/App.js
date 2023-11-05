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
  }
}

export default App;
