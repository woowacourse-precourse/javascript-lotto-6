import { Console } from "@woowacourse/mission-utils";
import draw from "../models/Draw.js";
import purchase from "../models/Purchase.js";
import reward from "../models/Reward.js";
import inputView from "../views/Input.js";
import outputView from "../views/Output.js";

const lottoGame = {
  start: async function () {
    const { purchaseAmount, lottoCount } = await this.purchase();
    const lottos = purchase.getLottos(lottoCount);
    const lottoNumbersArr = this.showNumbers(lottos); // 구매한 모든 로또의 번호가 담긴 배열

    const winningNumber = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber();

    // 당첨 통계
    const matches = draw.getResult(lottoNumbersArr, winningNumber, bonusNumber);
    outputView.printWinningStatistics(matches);

    const winningAmount = reward.computeWinningAmount(matches);
    const totalReturn = reward.computeTotalReturn(
      winningAmount,
      purchaseAmount
    );
    outputView.printTotalReturn(totalReturn);
  },

  purchase: async function () {
    try {
      const purchaseAmount = await inputView.enterPurchaseAmount();
      const lottoCount = purchase.countMoney(purchaseAmount);

      return { purchaseAmount, lottoCount };
    } catch (error) {
      Console.print(error.message);
      return await this.purchase();
    }
  },

  showNumbers: function (lottos) {
    const numbersArr = lottos.map((lotto) => lotto.getNumbers());
    outputView.printPurchasedLottos(numbersArr);

    return numbersArr;
  },

  getWinningNumber: async function () {
    try {
      return await inputView.enterWinningNumber();
    } catch (error) {
      Console.print(error.message);
      return await this.getWinningNumber();
    }
  },

  getBonusNumber: async function () {
    try {
      return await inputView.enterBonusNumber();
    } catch (error) {
      Console.print(error.message);
      return await this.getBonusNumber();
    }
  },
};

export default lottoGame;
