import InputView from './InputView.js';
import Lottos from './Lottos.js';
import OutputView from './OutputView.js';
import BonusLotto from './BonusLotto.js';
import WinningLotto from './WinningLotto.js';

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
  }

  async createLottos() {
    const amount = await this.#inputView.readPurchaseAmount();    
    this.#lottos = new Lottos(amount);
  }

  async createWinningLotto() {
    const winningNumbers = await this.#inputView.readWinningNumber();
    this.winningLotto = new WinningLotto(winningNumbers);
  }

  checkDuplicate(bonusNum) {
    const winningLotto = this.#lottos.getLottos().map((lotto) => lotto.getNumbers());
    console.log(winningLotto);
  }

  async createBonusLottos() {
    const bonusNum = await this.#inputView.readBonusNumber();
    this.checkDuplicate(bonusNum);
    this.#bonusLotto = new BonusLotto(bonusNum);
  }

  printAllLottos() {
    const allLotto = this.#lottos.getLottos();
    if(!allLotto.length){
      return;
    }

    allLotto.forEach((lotto) => {
      this.#outputView.printLottoNumbes(lotto.getNumbers());
    })
  }

}

export default Controller;