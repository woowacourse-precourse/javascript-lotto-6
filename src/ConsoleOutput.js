import { Console } from "@woowacourse/mission-utils";

export const ConsoleOutput = {
  lottoPurchasedMessage(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  lottoNumberList(lotto) {
    Console.print(`[${lotto.join(", ")}]`);
  },

  lottoProfit(num) {
    Console.print(`총 수익률은 ${percent}%입니다.`);
  },
};
