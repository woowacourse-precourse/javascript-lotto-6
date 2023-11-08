import { Console } from "@woowacourse/mission-utils";
import PRINT_MESSAGE from "../constant/PrintMessage";

const Output = {
  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}${PRINT_MESSAGE.LOTTO_COUNT}`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      Console.print(`[${lottos[i].join(", ")}]`);
    }
  },

  printResultStatistic(winningStatic) {
    Console.print("\n당첨통계\n---");
    for (let i = 0; i < winningStatic.length; i++) {
      Console.print(
        `${
          [
            "3개 일치 (5,000원) - ",
            "4개 일치 (50,000원) - ",
            "5개 일치 (1,500,000원) - ",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
            "6개 일치 (2,000,000,000원) - ",
          ][i]
        }${winningStatic[4 - i]}개`
      );
    }
  },
};

export default Output;
