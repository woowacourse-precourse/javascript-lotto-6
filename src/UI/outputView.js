import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "../const/Messages.js";

export const print = {
  prizeStatistics() {
    Console.print(PRINT.PRIZE_STATISTICS);
  },

  dashLine() {
    Console.print(PRINT.DASH_LINE);
  },

  returnRate(rate) {
    const message = PRINT.RETURN_RATE.replace("${rate}", rate.toString());
    Console.print(message);
  },

  howManyBuyTickets(ticketCounts) {
    const message = `${ticketCounts}${PRINT.HOW_MANY_BUY}`;
    Console.print(message);
  },

  formattedNumbers(numbers) {
    const formattedNumbers = numbers.join(", ");
    Console.print(`[${formattedNumbers}]`);
  },

  prizeResults(lottoResults) {
    Console.print(lottoResults);
  },
};
