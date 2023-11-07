import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  print(message) {
    Console.print(message);
  },
  printLottoTikets(TIKETS) {
    TIKETS.forEach((TIKET) => {
      const TEXT = "[" + TIKET.join(", ") + "]";
      Console.print(TEXT);
    });
    Console.print("");
  },
};
