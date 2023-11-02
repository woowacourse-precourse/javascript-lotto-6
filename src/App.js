import UserView from './view/UserView.js';
import Lottos from './Model/Lottos.js';

class App {

  #lottos;
  #winningNumber
  #bonusNumber

  constructor(){
    this.#lottos;
    this.#winningNumber = [];
    this.#bonusNumber;
    this.userView = new UserView();
  }

  async play() {
    await this.lottoProcess();
  }

  async lottoProcess(){
    await this.createLottoAmount();
    await this.createWinningNumbers();
    await this.createBonusNumber();
  }

  async createLottoAmount(){
    const PURCHASE_AMOUNT = await this.userView.userInputPurchaseAmount();
  }

  async createWinningNumbers(){
    this.winningNumber = await this.userView.userInputWinningNumbers();
  }

  async createBonusNumber(){
    this.bonusNumber = await this.userView.userInputBonusNumber();;
  }

}

export default App;
