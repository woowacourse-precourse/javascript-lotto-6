import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printPurchaseAmout(input) {
    MissionUtils.Console.print(`\n${input}개를 구매했습니다.`);
  },
};

export default OutputView;
