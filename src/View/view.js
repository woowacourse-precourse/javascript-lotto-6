import { Console } from "@woowacourse/mission-utils";
import Bonus from "../Bonus.js";
import Lotto from "../Lotto.js";
import { LOTTO } from "../constants/lotto.js";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/message.js";
import {
  MATCH_3,
  MATCH_4,
  MATCH_5,
  MATCH_5_BONUS,
  MATCH_6,
} from "../constants/statistics.js";
import { calculateStatistics } from "../module/statistics.js";
import { calculateProfit } from "../utils/calculator.js";

export const View = {
  async getAmount() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGE.requestPurchaseAmount
    );
    return amount;
  },

  async getWinnerNumber() {
    const winnerNumber = await Console.readLineAsync(
      INPUT_MESSAGE.requestWinnerNumber
    );

    Console.print(winnerNumber);

    const lotto = new Lotto(winnerNumber);

    return lotto;
  },

  async getBonusNumber(winnerNumbers) {
    const bonusNumber = await Console.readLineAsync(
      INPUT_MESSAGE.requestBonusNumber
    );

    const bonus = new Bonus(winnerNumbers, bonusNumber);

    return bonus;
  },

  async displayPurchaseLotto(purchaseAmount, lottoArray) {
    Console.print(
      OUTPUT_MESSAGE.purchaseConfirmation(purchaseAmount / LOTTO.price)
    );
    lottoArray.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  },

  displayWinningStatics(lottoArray, winnerLotto, bonus) {
    Console.print(OUTPUT_MESSAGE.winningStatics);

    const statics = calculateStatistics(lottoArray, winnerLotto, bonus);
    Console.print(`3개 일치 (5,000원) - ${statics[MATCH_3]}개`);
    Console.print(`4개 일치 (50,000원) - ${statics[MATCH_4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statics[MATCH_5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${statics[MATCH_5_BONUS]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${statics[MATCH_6]}개`);

    return statics;
  },

  displayProfit(statics, purchaseAmount) {
    const profit = calculateProfit(statics);
    Console.print(`총 수익률은 ${(profit / purchaseAmount) * 100}%입니다.`);
  },
};
