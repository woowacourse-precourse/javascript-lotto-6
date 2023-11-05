import { Console } from '@woowacourse/mission-utils';
import { PROPT_MESSAGE } from './constant/lottoConstants';
import LottoMachine from './classes/LottoMachine';

class App {
  async play() {
    const purchaseAmount = Console.readLineAsync(PROPT_MESSAGE.INPUT_PURCHASE_AMOUNT);
    const lottoMachine = new LottoMachine(purchaseAmount);
  }
}

export default App;
