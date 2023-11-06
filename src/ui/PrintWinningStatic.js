import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";
import winMessages from "../common/winMessage.js";

const printWinningStatic = (count) => {
  Console.print(`${Messages.PRINT_WINNING_STATICS_MESSAGE}`);
  winMessages.forEach((msg, i) => {
    Console.print(`${msg} ${count[i]}개`);
  });
};

export default printWinningStatic;
