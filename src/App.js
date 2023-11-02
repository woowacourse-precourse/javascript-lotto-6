import UserView from './view/UserView.js';
import Lottos from './Model/Lottos.js';

class App {

  #lottos;

  constructor(){
    this.#lottos;
    this.userView = new UserView();
  }

  async play() {
    await this.lottoProcess();
  }

  async lottoProcess(){
    await this.createLottoAmount();
  }

  async createLottoAmount(){
    const PURCHASE_AMOUNT = await this.userView.userInputPurchaseAmount();
  }

}

export default App;
