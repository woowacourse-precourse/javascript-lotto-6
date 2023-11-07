import { MissionUtils } from "@woowacourse/mission-utils";

class PrintRateOfReturn {
  async print(rateOfReturn) {
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default PrintRateOfReturn;
