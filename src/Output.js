import { Console } from "@woowacourse/mission-utils";
import INFORMATION_MESSAGE from "./constant/informationData.js";

const Output = {
  writeLottoCount(lottoCount) {
    Console.print(`${lottoCount}${INFORMATION_MESSAGE.PURCHASE}`);
  },
};

export default Output;
