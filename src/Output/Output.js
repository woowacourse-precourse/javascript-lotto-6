import { Console } from "@woowacourse/mission-utils";
import PRINT_MESSAGE from "../Constant/PrintMessage";

const Output = {
  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}${PRINT_MESSAGE.LOTTO_COUNT}`);
  },
};

export default Output;