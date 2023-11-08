import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";
import { PRIZE } from "../constants/lotto.js";

const OutputView = {
  printLottoCount(lottos) {
    Console.print(OUTPUT_MESSAGE.buyLottos(lottos));
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(OUTPUT_MESSAGE.lottoArray(lotto));
    });
  },

  printBlankLine() {
    Console.print("");
  },

  printPrizes(targetPrizes) {
    const prizeCount = this.countPrizes(targetPrizes);
    Console.print(OUTPUT_MESSAGE.lottoResult(prizeCount));
  },

  countPrizes(targetPrizes) {
    const AVAILABLE_PRIZES = Object.values(PRIZE);

    return AVAILABLE_PRIZES.reduce((acc, availablePrize) => {
      acc[availablePrize] = this.countElementInArray(availablePrize, targetPrizes);
      return acc;
    }, {});
  },

  countElementInArray(target, array) {
    return array.filter((element) => element === target).length;
  },

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGE.profitRate(profitRate));
  },
};

export default OutputView;
