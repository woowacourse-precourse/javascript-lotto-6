import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGE } from './constant/lottoConstants';
import LottoMachine from './classes/LottoMachine';
import LottoViewer from './classes/LottoViewer';
import Lotto from './Lotto';
import LottoResultChecker from './classes/LottoResultChecker';
import LottoBonus from './classes/LottoBonus';

class App {
  #lottoMachine;

  #lotto;

  #lottoBonus;

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
        this.#lotto = new Lotto(lottoWinningNumber.split(','));
      } catch (error) {
        Console.print(error);
      }
    } while (!this.#lotto);
  }

  async #enterBonusNumber() {
    do {
      try{
        const lottoBonusNumber = await Console.readLineAsync(PROMPT_MESSAGE.INPUT_BONUS_NUMBER);
        this.#lottoBonus = new LottoBonus(this.#lotto.getWinningNumbers(), lottoBonusNumber);
      } catch (error) {
        Console.print(error);
      }
    } while (!this.#lottoBonus);
  }

  async play() {
    await this.#purchaseLotto();
    const boughtLottos = this.#lottoMachine.getLottos();
    LottoViewer.purchasedLottos(boughtLottos);
    await this.#enterLottoNumbers();
    const winningNumbers = this.#lotto.getWinningNumbers();
    await this.#enterBonusNumber();
    const bonusNumber = this.#lottoBonus.getBonus();
    const lottoResultChecker = new LottoResultChecker(winningNumbers, bonusNumber, boughtLottos);
    LottoViewer.winningResult(lottoResultChecker.getResult());
    LottoViewer.lottoProfitRate(lottoResultChecker.getProfitRate());
  }
}

export default App;
