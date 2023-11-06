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
};

export const showStatisticsResult = (statisticsArray) => {
  Console.print(LOTTO_PLAY.winningStatistics);
  Console.print(LOTTO_PLAY.statisticsContour);

  const statisticsResultArray = [
    `3개 일치 (5,000원) - ${statisticsArray[0]}개`,
    `4개 일치 (50,000원) - ${statisticsArray[1]}개`,
    `5개 일치 (1,500,000원) - ${statisticsArray[2]}개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${statisticsArray[3]}개`,
    `6개 일치 (2,000,000,000원) - ${statisticsArray[4]}개`,
    `총 수익률은 ${statisticsArray[5]}%입니다.`
  ];

  statisticsResultArray.forEach((statistic) => Console.print(statistic));
};
