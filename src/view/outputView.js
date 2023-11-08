import { Console } from "@woowacourse/mission-utils";
import { calculateProfitRatio } from "../model";

const printResult = (result, amount) => {
  const profit = (
    (calculateProfitRatio(result) / (amount * 1000)) *
    100
  ).toFixed(1);
  Console.print("당첨 통계");
  Console.print("---");
  Console.print(`3개 일치 (5,000원) - ${result.three}개`);
  Console.print(`4개 일치 (50,000원) - ${result.four}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result.bonus}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.five}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result.six}개`);
  Console.print(`총 수익률은 ${profit}%입니다.`);
};

export default printResult;
