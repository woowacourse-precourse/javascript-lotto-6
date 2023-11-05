import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants";

class ConsolePrint {
  #printLottoNumbers(lotto) {
    const lottoStr = `[${lotto.getNumbers().join(", ")}]`;
    Console.print(lottoStr);
  }

  printLottos(lottos) {
    Console.print(OUTPUT_MESSAGE.lottoCounts(lottos.length));
    for (let i = 0; i < lottos.length; i++) {
      this.#printLottoNumbers(lottos[i]);
    }
  }
}

export default ConsolePrint;
