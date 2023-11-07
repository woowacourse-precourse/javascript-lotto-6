import { Console } from "@woowacourse/mission-utils";

const PrintResult = (lottoResult, profit) => {
  Console.print(`당첨 통계\n---`);
  Console.print(`3개 일치 (5,000원) - ${lottoResult["3"]}개`);
  Console.print(`4개 일치 (50,000원) - ${lottoResult["4"]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${lottoResult["5"]}개`);
  Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult["5bonus"]}개`
  );
  Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult["6"]}개`);
  Console.print(`총 수익률은 ${profit}%입니다.`);
};

export default PrintResult;
