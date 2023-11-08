import { MissionUtils } from "@woowacourse/mission-utils";
import { Counter } from "./Counter.js";
import { Bonus } from "./Bonus.js";
import { Winning } from "./Winning.js";
import { model } from "./Model.js";
import { Results } from "./Results.js";
import { comments } from "./Comment.js";

class App {
  constructor() {
    this.counter = null;
  }

  async play() {
    try {
      await this.#inputMoney();
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }

  async #inputMoney() {
    comments.inputNumberComment();

    const totalMoney = await MissionUtils.Console.readLineAsync('');
    this.#callCounter(totalMoney);

    this.#inputWinningNumber();
  }

  #callCounter(money) {
    this.counter = new Counter(money);
    this.counter.lottoCountPrinter();
    this.counter.lottosPrinter();
  }

  async #inputWinningNumber() {
    comments.winningNumberComment();

    const winningNumber = await MissionUtils.Console.readLineAsync('');
    const winningSplitNumber = this.winningNumberSpliter(winningNumber);
    new Winning(winningSplitNumber);

    this.#inputBonusNumber();
  }

  winningNumberSpliter(input) {
    const winningNumberSplit = input.split(',');
    return winningNumberSplit;
  }

  async #inputBonusNumber() {
    comments.bonusNumberComment();

    const bonusNumber = await MissionUtils.Console.readLineAsync('');
    new Bonus(bonusNumber, model.winningNumber);

    this.#callResults()
    process.exitCode = 0;
  }

  #callResults() {
    new Results(model.lottoNumbers, model.winningNumber, model.bonus, model.counts)
  }
}

export default App;