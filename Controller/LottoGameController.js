import { Console } from '@woowacourse/mission-utils';
import WinningLotto from '../Domain/WinningLotto.js';

class LottoGameController {
  #lottoMachine;

  #winningJudge;

  #inputview;

  #outputview;

  #lottoList;

  constructor({ LottoMachine, WinningJudge, inputview, outputview }) {
    this.#lottoMachine = LottoMachine;
    this.#winningJudge = WinningJudge;
    this.#inputview = inputview;
    this.#outputview = outputview;
  }

  async startGame() {
    await this.readMoney();
    this.printLottos();
    this.printGameResult();
  }

  async readMoney() {
    const userMoney = await this.#inputview.readMoney();
    this.#lottoList = this.#lottoMachine.buyLotto(userMoney);
  }

  printLottos() {
    this.#outputview.printAllLottos(this.#lottoList);
  }

  async makeWinningLotto() {
    const winningLottoNumber = await this.#inputview.readWinningLottoNumber();
    const bonusNumber = await this.#inputview.readBonusNumber();
    const winngLotto = new WinningLotto({ numbers: winningLottoNumber, bonusNumber });

    return winngLotto;
  }

  async printGameResult() {
    const winngLotto = await this.makeWinningLotto();
    this.#winningJudge.calculateWinner(this.#lottoList, winngLotto);
    const winnerList = this.#winningJudge.getWinnerList();
    this.#outputview.printresult(winnerList);
    const purchaseAmount = this.#lottoList.length * 1000;
    const rateOfReturn = this.#winningJudge.calculateRateOfReturn(winnerList, purchaseAmount);
    this.#outputview.printRateOfReturn(rateOfReturn);
  }
}

export default LottoGameController;
