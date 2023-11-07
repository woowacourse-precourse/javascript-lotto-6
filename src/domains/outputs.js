import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const outputs = {
  // 발행한 로또 수량 출력
  printAmountOfLotto(amount) {
    Console.print(`\n${amount}${MESSAGE.output.amount}`);
  },
  // 발행한 로또 출력
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  },
};

export default outputs;
