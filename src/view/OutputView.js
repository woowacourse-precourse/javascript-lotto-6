import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printPurchaseAmout(input) {
    MissionUtils.Console.print(`\n${input}개를 구매했습니다.`);
  },

  printResultMsg() {
    MissionUtils.Console.print(`\n당첨 통계\n---`);
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
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${input}개`);
  },

  fourCorrectMsg(input) {
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${input}개`);
  },

  fiveCorrectMsg(input) {
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${input}개`);
  },

  fiveBonusCorrectMsg(input) {
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${input}개`);
  },

  sixCorrectMsg(input) {
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${input}개`);
  },

  printRoi(input) {
    MissionUtils.Console.print(`총 수익률은 ${input}%입니다.`);
  },
};

export default OutputView;
