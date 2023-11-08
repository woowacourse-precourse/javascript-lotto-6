import SetGame from './domain/SetGame.js';
import Utils from './Utils.js';
import InputView from './View/InputView.js';
import OuputView from './View/OutputView.js';

class LottoGame {
  constructor() {
    this.setGame = null;
    this.inputView = new InputView();
    this.ouputView = new OuputView();
    this.winningStatus = null;
  }
  // 로또 구매 및 발행
  async buyLotto() {
    const buyAmount = await this.inputView.inputBuyAmount();
    this.setGame = new SetGame(buyAmount);
    const sortedLottos = Utils.sortLottoNumbers(this.setGame.getLottoNumbers());
    this.ouputView.printLottoNumbers(sortedLottos);
  }
  // 당첨 현황 계산
  async calcWinner() {
    const winningNumber = await this.inputView.inputWinningNumber();
    const bonusNumber = await this.inputView.inputBonusNumber();
    this.winningStatus = this.setGame.getWinningStatus(
      winningNumber,
      bonusNumber,
    );
  }

  // 당첨현황 및 수익률 계산 및 출력
  lottoResult() {
    const profit = this.setGame.calcProfit(this.winningStatus);
    this.ouputView.printWinningStatus(this.winningStatus);
    this.ouputView.printProfit(profit);
  }

  // 전체 게임 실행
  async playGame() {
    await this.buyLotto();
    await this.calcWinner();
    this.lottoResult();
  }
}
export default LottoGame;
