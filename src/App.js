import UserView from './view/UserView.js';
import Lottos from './Model/Lottos.js';

class App {

  constructor(){
    this.lottos;
    this.winningNumber = [];
    this.bonusNumber;
    this.userView = new UserView();
  }

  async play() {
    await this.lottoProcess();
  }

  async lottoProcess(){
    await this.createLottoAmount();
    await this.createWinningNumbers();
    await this.createBonusNumber();
    this.lottos.lottoNumberResultCount(this.lottos.purchaseLottoNumbers, this.winningNumber, this.bonusNumber);
  }

  async createLottoAmount(){
    const PURCHASE_AMOUNT = await this.userView.userInputPurchaseAmount();
    this.lottos = new Lottos(Number(PURCHASE_AMOUNT));
  }

  async createWinningNumbers(){
    this.winningNumber = await this.userView.userInputWinningNumbers();
  }

  async createBonusNumber(){
    this.bonusNumber = await this.userView.userInputBonusNumber();;
  }

}

export default App;
