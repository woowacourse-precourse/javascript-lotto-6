import { Console } from "@woowacourse/mission-utils";
import LottoList from "../models/LottoList.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import { PLACE, PERCENT } from "../models/Constants.js";
import winningResults from "../models/WinningResults.js";

const GameManager = {
  async playLottoGame() {
    const [cost, lottos] = await this.issueLottos();

    await this.drawLottos(lottos);

    this.manageStatics(cost);
  },

  async issueLottos() {
    const cost = await InputView.receiveCost();

    const amount = this.calculateAmout(cost);
    const lottos = new LottoList(amount).getLottoList();

    OutputView.printPayment(amount, lottos);

    return [cost, lottos];
  },

  async drawLottos(lottoList) {
    const numbers = await InputView.receiveNumbers();
    const bonusNumber = await InputView.receiveBonusNumber();

    lottoList.forEach((lotto) => this.judgePrize(lotto, numbers, bonusNumber));
  },

  manageStatics(cost) {
    const totalProfit = this.calculateTotalProfit();
    const profitRatio = this.calculateProfitRatio(cost, totalProfit);

    OutputView.printStatics(winningResults, profitRatio);
  },

  judgePrize(lotto, numberList, bonusNumber) {
    const prize = new Set(
      numberList.filter((number) => lotto.includes(Number(number)))
    ).size;

    winningResults.forEach((_, index) => {
      if (prize === PLACE[index]) {
        if (index !== 1 || lotto.includes(bonusNumber)) {
          winningResults[index].ticket += 1;
        }
      }
    });
  },

  calculateAmout(cost) {
    return cost / 1000;
  },

  calculateProfitRatio(cost, totalProfit) {
    return ((totalProfit / cost) * PERCENT).toFixed(1);
  },

  calculateTotalProfit() {
    return winningResults.reduce(
      (sum, result) => result.price * result.ticket + sum,
      0.0
    );
  },
};

export default GameManager;
