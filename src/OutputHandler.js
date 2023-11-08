import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";
import PRIZE from "./constant/PRIZE.js";

class OutputHandler {
  static printLottoTicketCount(ticketNumber) {
    Console.print(MESSAGE.OUTPUT.LOTTO_TICKETS_COUNT(ticketNumber));
  }

  static printAllLottoNumbers(lottoNumberArray) {
    lottoNumberArray.map((lottoTicket) => {
      Console.print(`[${lottoTicket.join(", ")}]`);
    });
  }

  static printAllRankResult(rankResult) {
    Object.entries(PRIZE.RANK).map(
      ([rankKey, { MATCHED_COUNT, MONEY, BONUS_MATCH }]) => {
        Console.print(
          MESSAGE.OUTPUT.ALL_RANK_RESULT({
            rankCount: rankResult[rankKey],
            matchedCount: MATCHED_COUNT,
            money: MONEY,
            bonusMatch: BONUS_MATCH,
          })
        );
      }
    );
  }

  static printPrizeResult({ rankResult, profitRate }) {
    Console.print(MESSAGE.OUTPUT.PRIZE_RESULT_TITLE);
    this.printAllRankResult(rankResult);
    Console.print(MESSAGE.OUTPUT.PROFIT_RATE(profitRate));
  }

  static printErrorMessage(error) {
    Console.print(error.message);
  }
}

export default OutputHandler;
