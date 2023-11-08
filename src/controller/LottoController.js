import Utils from '../Utils.js';
import LottoGame from '../domain/LottoGame.js';
import OutputUi from '../ui/OutputUi.js';
import InputUi from '../ui/inputUi.js';

class LottoController {
  constructor() {
    this.lottoGame = null;
    this.inputUi = new InputUi();
    this.outputUi = new OutputUi();
    this.winningStatus = null;
  }
  // 로또 구매 및 발행
  async sellLotto() {
    const PURCHASE_AMOUNT = await this.inputUi.askpurchaseAmount();
    this.lottoGame = new LottoGame(PURCHASE_AMOUNT);
    const SORTED_LOTTO_NUMBERS = Utils.sortLottoNumbers(this.lottoGame.getLottoNumbers());
    this.outputUi.printPurchasedLottos(SORTED_LOTTO_NUMBERS);
  }

  // 당첨현황 계산
  async winningCalculation() {
    const WINNING_NUMBER = await this.inputUi.askWinningNumber();
    const BONUS_NUMBER = await this.inputUi.askBonusNumber();
    this.winningStatus = this.lottoGame.getWinningStatus(WINNING_NUMBER, BONUS_NUMBER);
  }

  // 수익률 계산과 당첨현황 및 수익률 출력
  lottoResult() {
    const RATE_OF_RETURN = this.lottoGame.calculateRateOfReturn(this.winningStatus);
    this.outputUi.printWinnigStatus(this.winningStatus);
    this.outputUi.printRateOfReturn(RATE_OF_RETURN);
  }

  // 전체 로직 실행
  async playGame() {
    await this.sellLotto();
    await this.winningCalculation();
    this.lottoResult();
  }
}
export default LottoController;
