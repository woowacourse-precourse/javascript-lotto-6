import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/gameMessge.js";

const OutputView = {
  printPurchaseAmout(quantity) {
    MissionUtils.Console.print(MESSAGE.result.Amount(quantity));
  },

  printResultMsg() {
    MissionUtils.Console.print(MESSAGE.result.title);
  },

  printResults(results) {
    this.printResultMsg();
    this.ThreeCorrectMsg(results[3]);
    this.fourCorrectMsg(results[4]);
    this.fiveCorrectMsg(results[5]);
    this.fiveBonusCorrectMsg(results["5bonus"]);
    this.sixCorrectMsg(results[6]);
  },

  ThreeCorrectMsg(input) {
    MissionUtils.Console.print(MESSAGE.match.three(input));
  },

  fourCorrectMsg(input) {
    MissionUtils.Console.print(MESSAGE.match.four(input));
  },

  fiveCorrectMsg(input) {
    MissionUtils.Console.print(MESSAGE.match.five(input));
  },

  fiveBonusCorrectMsg(input) {
    MissionUtils.Console.print(MESSAGE.match.bonus(input));
  },

  sixCorrectMsg(input) {
    MissionUtils.Console.print(MESSAGE.match.six(input));
  },

  printRoi(input) {
    MissionUtils.Console.print(MESSAGE.result.benefit(input));
  },
};

export default OutputView;
