import { MissionUtils } from "@woowacourse/mission-utils";

class PrintNumberOfLotto {
  async printNumberOfLotto(numberOfLotto) {
    MissionUtils.Console.print(`${numberOfLotto}개를 구매했습니다.`);
  }
}

export default PrintNumberOfLotto;
