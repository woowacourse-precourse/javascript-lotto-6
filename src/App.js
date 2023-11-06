import { MissionUtils } from "@woowacourse/mission-utils";
import { Counter } from "./Counter.js";
import { Bonus } from "./Bonus.js";
import { Winning } from "./Winning.js";
import { model } from "./Model.js";
import { Results } from "./Results.js";

class App {
  constructor() {
    this.counter = null;
    this.winning = null;
    this.bonus = null;
    this.results = null;
  }

  async play() {
    try {
      await this.inputMoney();
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }

  async inputMoney() {
    let comment = PURCASE_COMMENT;
    MissionUtils.Console.print(comment);

    const totalMoney = await MissionUtils.Console.readLineAsync('');
    this.callCounter(totalMoney);

    this.inputWinningNumber();
  }

  callCounter(money) {
    this.counter = new Counter(money);
    const lottoCounts = this.counter.lottoCounter();
    model.counts = lottoCounts;

    this.counter.lottoCountPrinter(lottoCounts);
    this.counter.lottosPrinter();
  }

  async inputWinningNumber() {
    this.winningNumberComment();

    const winningNumber = await MissionUtils.Console.readLineAsync('');
    const winningSplitNumber = winningNumberSpliter(winningNumber);
    this.winning = new Winning(winningSplitNumber);
    const winning = this.winning.winningNumbers();
    model.winningNumber = winning;

    this.inputBonusNumber(winning, model.counts);
  }

  async inputBonusNumber(winning, counts) {
    this.bonusNumberComment();

    const bonusNumber = await MissionUtils.Console.readLineAsync('');
    this.bonus = new Bonus(bonusNumber, winning);
    const bonus = this.bonus.bonusNumber();
    model.bonus = bonus;

    this.callResults(winning, bonus, counts)
  }

  callResults(winning, bonus, counts) {
    MissionUtils.Console.print("");
    this.results = new Results(model.lottoNumbers, winning, bonus, counts)
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