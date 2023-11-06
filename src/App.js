import { MissionUtils } from "@woowacourse/mission-utils";
import userInputAllCheck from "./error-check/userInputCheck";
import { BONUS_NUMBER, BUY_LOTTO_AMOUNT, WINNING_NUMBERS } from "./constant/constant";
import inputBonusNumberValidation from "./error-check/inputBonusNumberCheck";
import User from "./User";
import Lotto from "./Lotto";
import playLottoGame from './game/playLottoGame';

class App {
  constructor() {
    this.user = new User();
  }

  async play() {
    await this.userBuyLotto();
  }

  async userBuyLotto() {
    try {
      const buyLottoAmount = await MissionUtils.Console.readLineAsync(BUY_LOTTO_AMOUNT);
      userInputAllCheck(buyLottoAmount);
      this.user.lottoBuy(buyLottoAmount);
      await this.userInputLottoNumbers();
    } catch (error) {
      MissionUtils.Console.print(`${error}`);
    }
  }

  async userInputLottoNumbers() {
    try {
      const inputLottoNumbers = await MissionUtils.Console.readLineAsync(WINNING_NUMBERS);
      this.lotto = new Lotto(inputLottoNumbers);
      await this.userInputBonusNumber(this.lotto.getNumber());
    } catch (error) {
      MissionUtils.Console.print(`${error}`);
    }
  }

  async userInputBonusNumber(lottoNumber) {
    try {
      const inputBonusNumber = await MissionUtils.Console.readLineAsync(BONUS_NUMBER);
      inputBonusNumberValidation(inputBonusNumber, lottoNumber);
      this.user.saveBonusNumber(inputBonusNumber);
      this.lottoGameStart(lottoNumber);
    } catch (error) {
      MissionUtils.Console.print(`${error}`);
    }
  }

  lottoGameStart(lottoNumber) {
    const numbers = lottoNumber;
    const { lottoArray, bonusNumber, userBuyMoney } = this.user;
    playLottoGame(numbers, lottoArray, bonusNumber, userBuyMoney);
  }
}

export default App;
