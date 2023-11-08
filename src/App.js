import { Console } from "@woowacourse/mission-utils";
import Budget from "./Budget.js";
import Game from "./Game.js";

class App {
  #budget = 0;

  async play() {
    this.#budget = await Budget.inputBudget();
    const lotteryNumbers = this.#budget.getLotteryNumbers();

    const game = new Game(lotteryNumbers);
    await game.getWinningNumbers();
    await game.getBonusNumber();
    game.countMatchingNumbers();
    game.calcWinningStatistics();

    const totalProfitPercentage = (
      (game.getOutcome() / Budget.getBudget()) *
      100
    ).toFixed(1);

    Console.print(`총 수익률은 ${totalProfitPercentage}%입니다.`);
  }
}

export default App;
