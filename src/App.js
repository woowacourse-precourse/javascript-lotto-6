import { MissionUtils } from "@woowacourse/mission-utils";
import { Counter } from "./Counter.js";
import { Bonus } from "./Bonus.js";
import { Winning } from "./Winning.js";
import { model } from "./Model.js";
import { Results } from "./Results.js";

class App {
  constructor() {
    this.counter = null;
  }

  async play() {
    try {
      await this.inputMoney();
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }

  async inputMoney() {
    this.inputNumberComment();

    const totalMoney = await MissionUtils.Console.readLineAsync('');
    this.callCounter(totalMoney);

    this.inputWinningNumber();
  }

  callCounter(money) {
    this.counter = new Counter(money);
    this.counter.lottoCountPrinter();
    this.counter.lottosPrinter();
  }

  async inputWinningNumber() {
    this.winningNumberComment();

    const winningNumber = await MissionUtils.Console.readLineAsync('');
    const winningSplitNumber = winningNumberSpliter(winningNumber);
    new Winning(winningSplitNumber);

    this.inputBonusNumber();
  }

  async inputBonusNumber() {
    this.bonusNumberComment();

    const bonusNumber = await MissionUtils.Console.readLineAsync('');
    new Bonus(bonusNumber, model.winningNumber);

    this.callResults()
    process.exitCode = 0;
  }

  callResults() {
    new Results(model.lottoNumbers, model.winningNumber, model.bonus, model.counts)
  }

  inputNumberComment() {
    let comment = PURCASE_COMMENT;
    MissionUtils.Console.print(comment);
  }

  winningNumberComment() {
    let comment = WINNING_NUMBER_COMMENT;
    MissionUtils.Console.print("");
    MissionUtils.Console.print(comment);
  }

  bonusNumberComment() {
    let comment = BONUS_NUMBER_COMMENT;
    MissionUtils.Console.print("");
    MissionUtils.Console.print(comment);
  }
}

export default App;

const PURCASE_COMMENT = "구입금액을 입력해 주세요."
const WINNING_NUMBER_COMMENT = "당첨 번호를 입력해 주세요.";
const BONUS_NUMBER_COMMENT = "보너스 번호를 입력해 주세요.";

export function winningNumberSpliter(input) {
  const winningNumberSplit = input.split(',');
  return winningNumberSplit;
}