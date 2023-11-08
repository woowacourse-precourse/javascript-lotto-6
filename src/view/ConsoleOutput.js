import { Console } from "@woowacourse/mission-utils";

export default class ConsoleOutput {
  lottoPurchasedMessage(count) {
    // let divideCount = count / 1000;
    const purchaseMsg = Console.print(`\n${count}개를 구매했습니다.`);
    return purchaseMsg;
  }

  lottoNumberList(lotto) {
    const lottoNums = Console.print(`[${lotto.join(", ")}]`);
    return lottoNums;
  }

  lottoProfit(num) {
    const profit = Console.print(`총 수익률은 ${num}%입니다.`);
    return profit;
  }

  generatedLotto(num) {
    const generateNums = Console.print(num);
    return generateNums;
  }

  print(msg) {
    const printMsg = Console.print(msg);
    return printMsg;
  }
}
