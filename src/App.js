import draw from "./models/Draw.js";
import purchase from "./models/Purchase.js";
import reward from "./models/Reward.js";
import inputView from "./views/Input.js";
import outputView from "./views/Output.js";

class App {
  async play() {
    /* 로또 구매 */
    const purchaseAmount = await inputView.enterPurchaseAmount();
    const lottoCount = purchase.countMoney(purchaseAmount);

    const lottos = purchase.getLottos(lottoCount);
    const lottoNumbersArr = lottos.map((lotto) => lotto.getNumbers());
    outputView.printPurchasedLottos(lottoNumbersArr);

    const winningNumber = await inputView.enterWinningNumber();
    const bonusNumber = await inputView.enterBonusNumber();
    const matches = draw.getResult(lottoNumbersArr, winningNumber, bonusNumber);
    outputView.printWinningStatistics(matches);

    const winningAmount = reward.computeWinningAmount(matches);
    const totalReturn = reward.computeTotalReturn(
      winningAmount,
      purchaseAmount
    );
    outputView.printTotalReturn(totalReturn);
  }
}

export default App;
