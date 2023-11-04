import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PLAY } from "../constants/Messeage.js";

export const showLottoTicket = (lottoTicket) => {
  const purchaseNumber = lottoTicket.length;
  
  Console.print(`${purchaseNumber}${LOTTO_PLAY.purchaseComplete}`);
  
  lottoTicket.forEach((luckyArray) => {
    const luckyString = luckyArray.join(', ');
    Console.print(`[${luckyString}]`);
  })
  
  Console.print('');
}

export const showStatisticsResult = (statisticsArray) => {
  Console.print(LOTTO_PLAY.winningStatistics);
  Console.print(LOTTO_PLAY.statisticsContour);

  statisticsArray.forEach((result) => {
    Console.print(result);
  })
}