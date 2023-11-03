import UserView from './view/UserView.js';
import Lottos from './Model/Lottos.js';
import WinningNumbers from './model/WinningNumbers.js';
import BonusNumber from './model/BonusNumber.js';

class App {

  constructor(){
    this.lottos;
    this.winningNumber;
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
    this.lottoNumberResult();
  }

  async createLottoAmount(){
    const PURCHASE_AMOUNT = await this.userView.userInputPurchaseAmount();
    this.lottos = new Lottos(PURCHASE_AMOUNT);
    this.userView.userOutputLottoCount(this.lottos.lottoCount);
    this.userView.userOutputPurchaseLottoNumber(this.lottos.purchaseLottoNumbers);
  }

  async createWinningNumbers(){
    const WINNING_NUMBER = await this.userView.userInputWinningNumbers();
    this.winningNumber = new WinningNumbers(WINNING_NUMBER);
  }

  async createBonusNumber(){
    const BONUS_NUMBER = await this.userView.userInputBonusNumber();
    this.bonusNumber = new BonusNumber(BONUS_NUMBER);
  }

  lottoNumberResult = () => {
      this.lottos.lottoNumberResultCount(this.lottos.purchaseLottoNumbers, this.winningNumber.winningNumber, this.bonusNumber.bonusNumber);
  }

}

export default App;
