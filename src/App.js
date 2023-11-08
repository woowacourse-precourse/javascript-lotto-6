import User from "./User";
import playLottoGame from './game/playLottoGame';
import OutputView from "./view/OutputView";
import inputValid from "./valid/inputValid";

class App {
  constructor() {
    this.user = new User();
  }

  async play() {
    await this.userBuyLotto();
  }

  async userBuyLotto() {
    try {
      const buyLottoAmount = await inputValid.validLottoAmount();
      this.user.lottoBuy(buyLottoAmount);
      await this.userInputLottoNumbers();
    } catch (error) {
      OutputView.printError(error);
    }
  }

  async userInputLottoNumbers() {
    try {
      const lottoNumbers = await inputValid.validLottoNumbers();
      await this.userInputBonusNumber(lottoNumbers);
    } catch (error) {
      OutputView.printError(error);
    }
  }

  async userInputBonusNumber(lottoNumber) {
    try {
      const bonusNumber = await inputValid.validBonusNumber(lottoNumber);
      this.user.saveBonusNumber(bonusNumber);
      this.lottoGameStart(lottoNumber);
    } catch (error) {
      OutputView.printError(error);
    }
  }

  lottoGameStart(lottoNumber) {
    const numbers = lottoNumber;
    const { lottoArray, bonusNumber, userBuyMoney } = this.user;
    playLottoGame(numbers, lottoArray, bonusNumber, userBuyMoney);
  }
}

export default App;
