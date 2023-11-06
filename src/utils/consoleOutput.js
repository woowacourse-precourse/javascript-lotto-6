/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, RANKS } from "./CONSTANT";

const printProfitPercentage = (profitPercentage) => {
  MissionUtils.Console.print(
    `${OUTPUT_MESSAGE.totalProfitPercentage} ${profitPercentage.toFixed(
      1,
    )}%입니다.`,
  );
};

const printWinnigList = (result) => {
  RANKS.forEach((rank) => {
    const count = result.filter((r) => r === rank.rank).length;
    const mathing = rank.bonus
      ? OUTPUT_MESSAGE.matchCount + OUTPUT_MESSAGE.matchBonus
      : OUTPUT_MESSAGE.matchCount;
    MissionUtils.Console.print(
      `${
        rank.matchCount
      }${mathing} (${rank.prize.toLocaleString()}원) - ${count}개`,
    );
  });
};

const printResults = (result, profitPercentage) => {
  printWinnigList(result);
  printProfitPercentage(profitPercentage);
};

const printPurchaseResults = (ticketCount, tickets) => {
  MissionUtils.Console.print(
    `\n${ticketCount + OUTPUT_MESSAGE.purchaseResult}`,
  );
  tickets.forEach((ticket) =>
    MissionUtils.Console.print(`[${ticket.numbers.join(", ")}]`),
  );
};

export { printResults, printPurchaseResults };
