import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const outputs = {
  printAmountOfLotto(number) {
    Console.print(`\n${number}${MESSAGE.output.amountOfLotto}`);
  },
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.getLottoNum());
    });
  },
};

export default outputs;
