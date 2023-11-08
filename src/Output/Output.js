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
};

export default Output;
