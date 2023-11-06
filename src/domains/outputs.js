import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const outputs = {
  printAmountOfLotto(number) {
    Console.print(`\n${number}${MESSAGE.output.amountOfLotto}`);
  },
};

export default outputs;
