import InputView from './InputView.js';
import Lottos from './Lottos.js';
import OutputView from './OutputView.js';
import BonusLotto from './BonusLotto.js';
import WinningLotto from './WinningLotto.js';
import { REWARD } from './constants/constants.js';
import { Console } from '@woowacourse/mission-utils';

class Controller {
  #inputView;
  #outputView;
  #lottos;
  #bonusLotto;
  #winningLotto;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    await this.createLottos();
    this.printAllLottos();
    await this.createWinningLotto();
    await this.createBonusLottos();
    this.printAllRanking();
  }

  async createLottos() {
    try{
      const amount = await this.#inputView.readPurchaseAmount();
      this.#lottos = new Lottos(amount);
    } catch (error) {
      Console.print(error.message);
      await this.createLottos();
      return;
    }
  }

  async createWinningLotto() {
    const winningNumbers = await this.#inputView.readWinningNumber();
    this.#winningLotto = new WinningLotto(winningNumbers);
  }

  checkDuplicate(bonusNum) {
    const winningLotto = this.#winningLotto.getWinningNums();
    if (winningLotto.includes(bonusNum)) {
      throw new Error('[ERROR] 기존 6개의 당첨번호와 중복 되면 안됩니다.');
    }
  }

  async createBonusLottos() {
    const bonusNum = await this.#inputView.readBonusNumber();
    this.checkDuplicate(parseInt(bonusNum));
    this.#bonusLotto = new BonusLotto(bonusNum);
  }

  async printAllRanking() {
    const winningNumber = this.#winningLotto.getWinningNums();
    const bonusNumber = this.#bonusLotto.getBonusNum();
    const rankingObj = this.#lottos.getLottosRanking(
      winningNumber,
      bonusNumber,
    );
    this.#outputView.printRanking(rankingObj);

    this.calculateProfit(rankingObj);
  }

  calculateProfit(rankingObj) {
    let profit = 0;
    const cost = this.#lottos.getLottos().length * 1000;

    Object.entries(rankingObj).forEach(([ranking, count]) => {
      profit += REWARD[ranking] * (count ?? 0);
    });
    this.#outputView.printPrice(profit, cost);
  }

  printAllLottos() {
    const allLotto = this.#lottos.getLottos();
    if (!allLotto.length) {
      return;
    }
    this.#outputView.printLottoNumbes(allLotto);
  }
}

export default Controller;
