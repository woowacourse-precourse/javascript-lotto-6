import Input from '../view/Input';
import Output from '../view/Output';
import Purchase from '../model/Purchase';
import Lotto from '../model/Lotto';
import Bonus from '../model/Bonus';
import RandomNumber from './RandomLotto';
import Result from './Result';

class MainController {
  lottoCount;

  lottoNumber;

  static async UserPurchase() {
    let userPurchaseAmount = await Input.getPurchaseAmount();
    while (true) {
      try {
        const purchase = new Purchase(userPurchaseAmount);
        this.userPurchaseAmount = userPurchaseAmount;
        this.lottoCount = purchase.calculatePurchaseCount();
        Output.printPurchaseCount(this.lottoCount);
        break;
      } catch (error) {
        Output.printError(error);
        userPurchaseAmount = await Input.getPurchaseAmount();
      }
    }
  }

  static RandomLotto() {
    this.lottoNumber = RandomNumber.createRandomLottoNumber(this.lottoCount);
  }

  static async UserWinning() {
    let UserWinningNumber = await Input.getWinningNumber();
    while (true) {
      try {
        this.winningNumberArray = UserWinningNumber.split(',');
        const lotto = new Lotto(this.winningNumberArray);
        this.resultArray = lotto.getCompareResult(this.lottoNumber);
        break;
      } catch (error) {
        Output.printError(error);
        UserWinningNumber = await Input.getWinningNumber();
      }
    }
  }

  static async UserBonus() {
    let userBonusNumber = await Input.getBonusNumber();
    while (true) {
      try {
        const bonus = new Bonus(userBonusNumber);
        bonus.lottoNumberValidate(this.winningNumberArray, userBonusNumber);
        bonus.isInFive(this.resultArray);
        this.winningInFive = bonus.isinBonusNumber(this.lottoNumber);
        break;
      } catch (error) {
        Output.printError(error);
        userBonusNumber = await Input.getBonusNumber();
      }
    }
  }

  static getWinningResult() {
    Result.getWinningResult(this.resultArray);
    Result.calculateWinningMoney(this.winningInFive);
    Result.calculrateRateOfReturn(this.userPurchaseAmount);
    Result.printWinningStastics(this.winningInFive);
  }
}

export default MainController;