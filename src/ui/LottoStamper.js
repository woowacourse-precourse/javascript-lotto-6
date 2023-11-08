import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PLAY } from "../constants/Messeage.js";
import { LOTTO_STATISTICS_RESULT } from "../constants/Messeage.js";

export const showLottoTicket = (lottoTicket) => {
  Console.print(`${lottoTicket.length}${LOTTO_PLAY.purchaseComplete}`);
  
  lottoTicket.forEach((luckyArray) => {
    const luckyString = luckyArray.join(', ');
    Console.print(`[${luckyString}]`);
  });
  
  Console.print('');
};

export const showStatisticsResult = (statisticsArray) => {
  Console.print(LOTTO_PLAY.winningStatistics);
  Console.print(LOTTO_PLAY.statisticsContour);

  const statisticsResult = [
    LOTTO_STATISTICS_RESULT.fifthResult(statisticsArray[0]),
    LOTTO_STATISTICS_RESULT.fourthResult(statisticsArray[1]),
    LOTTO_STATISTICS_RESULT.thirdResult(statisticsArray[2]),
    LOTTO_STATISTICS_RESULT.secondResult(statisticsArray[3]),
    LOTTO_STATISTICS_RESULT.firstResult(statisticsArray[4]),
    LOTTO_STATISTICS_RESULT.earningRate(statisticsArray[5])
  ];

  statisticsResult.forEach((result) => Console.print(result));
};
