import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGE } from './constant/lottoConstants';
import LottoMachine from './classes/LottoMachine';
import LottoViewer from './classes/LottoViewer';
import Lotto from './Lotto';
import LottoResultChecker from './classes/LottoResultChecker';

class App {
  #lottoMachine;

  #lotto;

  async #purchaseLotto() {
    // 사용자가 올바른 입력을 할때까지 do while 블럭을 통해 입력받는다.
    do {
      try {
        const purchaseAmount = await Console.readLineAsync(PROMPT_MESSAGE.INPUT_PURCHASE_AMOUNT);
        this.#lottoMachine = new LottoMachine(purchaseAmount);
      } catch (error) {
        Console.print(error);
      }
    } while (!this.#lottoMachine);
  }

  async #enterLottoNumbers() {
    // 사용자가 올바른 입력을 할때까지 do while 블럭을 통해 입력받는다.
    do {
      try {
        const lottoWinningNumber = await Console.readLineAsync(PROMPT_MESSAGE.INPUT_WINNING_NUMBER);
        const lottoBonusNumber = await Console.readLineAsync(PROMPT_MESSAGE.INPUT_BONUS_NUMBER);
        this.#lotto = new Lotto(lottoWinningNumber.split(','), lottoBonusNumber);
      } catch (error) {
        Console.print(error);
      }
    } while (!this.#lotto);
  }

  async play() {
    await this.#purchaseLotto();
    const boughtLottos = this.#lottoMachine.getLottos();
    LottoViewer.purchasedLottos(boughtLottos);
    await this.#enterLottoNumbers();
    const { winningNumbers, bonusNumber } = this.#lotto.getWinningNumbers();
    const lottoResultChecker = new LottoResultChecker(winningNumbers, bonusNumber, boughtLottos);
    LottoViewer.winningResult(lottoResultChecker.getResult());
    LottoViewer.lottoProfitRate(lottoResultChecker.getProfitRate());
  }
}

export default App;
