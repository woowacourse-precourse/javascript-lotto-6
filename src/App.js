import { Console } from "@woowacourse/mission-utils";
import UserView from './view/UserView.js';
import Lottos from './model/Lottos.js';
import WinningNumbers from './model/WinningNumbers.js';
import BonusNumber from './model/BonusNumber.js';

class App {
  async play() {}

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
    try{
      const PURCHASE_AMOUNT = await this.userView.userInputPurchaseAmount();
      this.lottos = new Lottos(PURCHASE_AMOUNT);
    }catch(error){
      Console.print(error.message);
      await this.createLottoAmount();
    }
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
      const LOTTO_RANK = this.lottos.lottoNumberResultCount(this.lottos.purchaseLottoNumbers, this.winningNumber.winningNumber, this.bonusNumber.bonusNumber);
      this.resultLotto(LOTTO_RANK);
  }

  resultLotto = (lottoRank) => {
    this.lottos.lottoOutputRank.forEach((data, idx) => {
      this.userView.userOutputLottoResult(data+' - '+lottoRank[idx]+'개');
    });
    this.lottoYield(lottoRank);
  }

  lottoYield = (lottoRank) => {
    const YIELD = this.lottos.lottoYieldResult(lottoRank.reverse());
    this.userView.userOutputLottoYield(YIELD);
  }

}

export default App;