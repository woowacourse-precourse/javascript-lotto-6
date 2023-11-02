import UserView from './view/UserView.js';
import Lottos from './Model/Lottos.js';

class App {

  #lottos;
  #winningNumber;

  constructor(){
    this.#lottos;
    this.#winningNumber = [];
    this.userView = new UserView();
  }

  async play() {
    await this.lottoProcess();
  }

  async lottoProcess(){
    await this.createLottoAmount();
    await this.createWinningNumbers();
  }

  async createLottoAmount(){
    const PURCHASE_AMOUNT = await this.userView.userInputPurchaseAmount();
  }

  async createWinningNumbers(){
    this.winningNumber = await this.userView.userInputWinningNumbers();
  }

}

export default App;
