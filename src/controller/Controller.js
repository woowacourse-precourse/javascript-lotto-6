import InputView from '../view/InputView.js';
import Lottos from '../model/Lottos.js';
import OutputView from '../view/OutputView.js';
import BonusLotto from '../model/BonusLotto.js';
import WinningLotto from '../model/WinningLotto.js';
import { REWARD, VALUE } from '../constants/constants.js';

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
    try {
      const amount = await this.#inputView.readPurchaseAmount();
      this.#lottos = new Lottos(amount);
    } catch (error) {
      this.#outputView.printMsg(error.message);
      await this.createLottos();
    }
  }

  async createWinningLotto() {
    try{
      const winningNumbers = await this.#inputView.readWinningNumber();
      this.#winningLotto = new WinningLotto(winningNumbers);
    } catch (error) {
      this.#outputView.printMsg(error.message);
      await this.createWinningLotto();
    }
  }

  async createBonusLottos() {
    try{
      const bonusNum = await this.#inputView.readBonusNumber();
      this.#bonusLotto = new BonusLotto(bonusNum, this.#winningLotto.getWinningNums());
    } catch (error) {
      this.#outputView.printMsg(error.message);
      await this.createBonusLottos();
    }
  }

  async printAllRanking() {
    const winningNumber = this.#winningLotto.getWinningNums();
    const bonusNumber = this.#bonusLotto.getBonusNum();
    const rankingObj = this.#lottos.getLottosRanking(
      winningNumber,
      bonusNumber,
    );
    this.#outputView.printSpace();
    this.#outputView.printRanking(rankingObj);

    this.calculateProfit(rankingObj);
  }

  calculateProfit(rankingObj) {
    let profit = 0;
    const cost = this.#lottos.getLottos().length * VALUE.lottoUnit;

    Object.entries(rankingObj).forEach(([ranking, count]) => {
      profit += REWARD[ranking] * (count ?? 0);
    });
    this.#outputView.printProfit(profit, cost);
  }

  printAllLottos() {
    const allLotto = this.#lottos.getLottos();
    if (!allLotto.length) {
      return;
    }
    this.#outputView.printLottoNumbers(allLotto);
  }
}

export default Controller;
