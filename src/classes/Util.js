import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import Validation from "./Validation.js";
import WinningLotto from "./WinningLotto.js";
import { gameConstant, prize, inputMessage } from "../constant.js";

const Console = MissionUtils.Console;

class Util {
  static async userMoney() {
    const userMoney = await Console.readLineAsync(inputMessage.GET_USER_MONEY);
    return userMoney;
  }

  static async validateUserMoney() {
    while (gameConstant.WHILE_PARAMETER) {
      try {
        const money = await Util.userMoney();
        Validation.userMoney(money);
        return money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static getPurchaseNumber(userMoney) {
    return userMoney / gameConstant.LOTTO_PRICE;
  }

  static getLottoArray(purchaseNumber) {
    return Array(purchaseNumber)
      .fill()
      .map(() => Lotto.createNumber());
  }

  static getLottoClasses(purchaseNumber) {
    return this.getLottoArray(purchaseNumber).map((lotto) => new Lotto(lotto));
  }

  static getLottosCount(lottoclasses, winningNumberClass) {
    lottoclasses.forEach((lottoClass) =>
      lottoClass.compareNumber(winningNumberClass.number)
    );
    lottoclasses.forEach((lottoClass) =>
      lottoClass.compareBonusNumber(winningNumberClass.bonusNumber)
    );
  }

  static async WinningLotto() {
    const winningNumbers = await WinningLotto.getWinningNumbers();
    const bonusNumber = await WinningLotto.getBonusNumber(winningNumbers);

    return new WinningLotto(winningNumbers, bonusNumber);
  }

  static getRank(lottosClasses) {
    const rank = {};
    rank.first = lottosClasses.filter((element) => element.COUNT === 6).length;
    rank.second = lottosClasses.filter(
      (element) => element.COUNT === 5 && element.BONUS
    ).length;
    rank.third = lottosClasses.filter(
      (element) => element.COUNT === 5 && !element.BONUS
    ).length;
    rank.fourth = lottosClasses.filter((element) => element.COUNT === 4).length;
    rank.fifth = lottosClasses.filter((element) => element.COUNT === 3).length;
    return rank;
  }

  static totalPrize(rank) {
    return (
      rank.first * prize.FIRST +
      rank.second * prize.SECOND +
      rank.third * prize.THIRD +
      rank.fourth * prize.FOURTH +
      rank.fifth * prize.FIFTH
    );
  }

  static rate(totalPrize, investMoney) {
    return ((totalPrize / investMoney) * 100).toFixed(1);
  }
}

export default Util;
