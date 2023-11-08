import { Console } from "@woowacourse/mission-utils";
import INFORMATION_MESSAGE from "./constant/informationData.js";
import { returnRateCalculate } from "./utils/lotto.js";

const Output = {
  writeLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}${INFORMATION_MESSAGE.PURCHASE}`);
  },
  writeLottoStatics(result) {
    Console.print(INFORMATION_MESSAGE.WINNING_STATISTICS);
    for (const rank in result) {
      if (rank === "second") {
        Console.print(
          `${
            result[rank].count
          }개 일치, 보너스 볼 일치 (${new Intl.NumberFormat().format(
            result[rank].prize
          )}원) - ${result[rank].matched}개`
        );
        continue;
      }
      Console.print(
        `${result[rank].count}개 일치 (${new Intl.NumberFormat().format(
          result[rank].prize
        )}원) - ${result[rank].matched}개`
      );
    }
  },
  writeReturnRate(result, payment) {
    Console.print(
      `${INFORMATION_MESSAGE.RETURN_RATE}${returnRateCalculate(
        result,
        payment
      )}${INFORMATION_MESSAGE.PERCENT}`
    );
  },
};

export default Output;
