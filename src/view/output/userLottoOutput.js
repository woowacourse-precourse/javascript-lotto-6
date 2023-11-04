import { Console } from "@woowacourse/mission-utils";
import SYMBOLS from "../../constants/symbols.js";

const userLottoOutput = (numbers) => {
  numbers.forEach((value) => {
    Console.print(`[${value.join(SYMBOLS.space_and_comma)}]`);
  });
};

export default userLottoOutput;
