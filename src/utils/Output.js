import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import OUTPUT_MESSAGE from "../constant/OutputMessage.js";

const Output = {
  printTicketCount(ticketCount) {
    Console.print(OUTPUT_MESSAGE.PURCHASE(ticketCount));
  },

  printLottoNumbers(lotto) {
    Console.print(OUTPUT_MESSAGE.NUMBERS(lotto));
  },

  printRank(rank) {
    Console.print(OUTPUT_MESSAGE.STATISTICS);
    Console.print(OUTPUT_MESSAGE.FIFTH_PLACE(rank[4]));
    Console.print(OUTPUT_MESSAGE.FOURTH_PLACE(rank[3]));
    Console.print(OUTPUT_MESSAGE.THIRD_PLACE(rank[2]));
    Console.print(OUTPUT_MESSAGE.SECOND_PLACE(rank[1]));
    Console.print(OUTPUT_MESSAGE.FIRST_PLACE(rank[0]));
  },

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGE.PROFIT_RATE(profitRate));
  },
};

export default Output;
