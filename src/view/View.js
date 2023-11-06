import { Console } from "@woowacourse/mission-utils";
import { LOTTO } from "../utils/Constant.js";

class View {
  readLine(message) {
    return Console.readLineAsync(message);
  }

  print(message) {
    Console.print(message);
  }

  printLotto(lotties) {
    Console.print(`\n${lotties.length}개를 구매했습니다.`);

    lotties.forEach((lotto) => {
      Console.print(`[${lotto.lottoNumbers.join(", ")}]`);
    });
  }

  printLottoPrize(prizeCategories) {
    Console.print(LOTTO.prizeStatic);

    for (const [key, prize] of Object.entries(prizeCategories)) {
      const prizeGrade = key.replace(/[^0-9]/g, "");

      if (key === "equal5WithBonus") {
        Console.print(`${prizeGrade}개 일치, 보너스 볼 일치 (${prize.price}원) - ${prize.count}개`);
        continue;
      }
      Console.print(`${prizeGrade}개 일치 (${prize.price}원) - ${prize.count}개`);
    }
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default View;
