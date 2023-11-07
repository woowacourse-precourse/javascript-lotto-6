import { Console } from "@woowacourse/mission-utils";

class Output {
  constructor() {}

  async printResult(result) {
    Console.print(result);
  }

  async printResultNewLine(result) {
    Console.print(result);
  }

  async printWinngStatistics(result, profitMargin) {
    Console.print("");
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${result.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${result.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.first}개`);
    Console.print(`총 수익률은 ${profitMargin}%입니다.`);
  }
}

export default Output;
