import InputView from './InputView.js';
import Lottos from './Lottos.js';
import OutputView from './OutputView.js';

class Controller {
  #inputView;
  #outputView;
  #lottos;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    await this.createLottos();
    this.printAllLottos();
  }

  async createLottos() {
    const amount = await this.#inputView.readPurchaseAmount();    
    this.#lottos = new Lottos(amount);
    return amount;
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