import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "../models/Constants.js";

const OutputView = {
  printPayment(amount, lottoList) {
    this.printAmount(amount);
    this.printLottos(lottoList);
  },

  printStatics(winningResultList, profitRatio) {
    Console.print(IN_GAME_MESSAGE.lottoResults);

    this.printWinningResult(winningResultList);
    this.printProfitRatio(profitRatio);
  },

  printAmount(amount) {
    Console.print(`\n${amount}${IN_GAME_MESSAGE.amount}`);
  },

  printLottos(lottoList) {
    lottoList.forEach((lotto) => this.printLotto(lotto));
  },

  printLotto(lotto) {
    const numbers = lotto.map((number) => number).join(", ");

    Console.print(`[${numbers}]`);
  },

  printWinningResult(winningResultList) {
    winningResultList.forEach((result) =>
      Console.print(
        `${result.history} (${result.price.toLocaleString()}원) - ${
          result.ticket
        }개`
      )
    );
  },

  printProfitRatio(profitRatio) {
    Console.print(`총 수익률은 ${profitRatio}%입니다.`);
  },
};

export default OutputView;
