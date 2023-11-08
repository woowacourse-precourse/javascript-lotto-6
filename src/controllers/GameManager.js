import LottoList from "../models/LottoList.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import { PLACE, PERCENT } from "../models/Constants.js";
import winningResults from "../models/WinningResults.js";
import { Console } from "@woowacourse/mission-utils";

const GameManager = {
  async playLottoGame() {
    const [cost, lottos] = await this.issueLottos();

    await this.drawLottos(lottos);

    await this.manageStatics(cost);
  },

  async issueLottos() {
    let cost;
    while (true) {
      try {
        cost = await InputView.receiveCost();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const amount = this.calculateAmout(cost);
    const lottos = new LottoList(amount).getLottoList();

    OutputView.printPayment(amount, lottos);

    return [cost, lottos];
  },

  async drawLottos(lottoList) {
    let numbers;
    while (true) {
      try {
        numbers = await InputView.receiveNumbers();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await InputView.receiveBonusNumber();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    lottoList.forEach((lotto) => this.judgePrize(lotto, numbers, bonusNumber));
  },

  async manageStatics(cost) {
    const totalProfit = this.calculateTotalProfit();
    const profitRatio = this.calculateProfitRatio(cost, totalProfit);

    OutputView.printStatics(winningResults, profitRatio);
  },

  judgePrize(lotto, numberList, bonusNumber) {
    const prize = new Set(
      [...lotto].filter((number) => numberList.includes(number))
    ).size;

    winningResults.reverse().forEach((result, index) => {
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
