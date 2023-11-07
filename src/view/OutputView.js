import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  constructor() {}

  printLottoTickets(lottoTickets) {
    Console.print(`${lottoTickets.length}개를 구매했습니다.`)
    lottoTickets.forEach((lottoTicket) => Console.print(`[${lottoTicket.join(', ')}]`));
  }

  printResult(result, profitRate) {
    Console.print(`\n당첨 통계\n---`);
    Console.print(`3개 일치 (5,000원) - ${result['5th']}개`);
    Console.print(`4개 일치 (50,000원) - ${result['4th']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result['3rd']}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result['2nd']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result['1st']}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}
