import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../Model/LottoMachine';

class LottoOutput {
  static displayLottoTickets(lottoTicket) {
    MissionUtils.Console.print(`${lottoTicket.length}개를 구매했습니다.`);
    lottoTicket.forEach((ticket) => {
      const TICKET_NUMBERS = ticket.getLottoNumbers();
      MissionUtils.Console.print(`[${TICKET_NUMBERS.join(', ')}]`);
    });
  }

  static displayGameResult(prizeList, ticketAmount) {
    MissionUtils.Console.print('당첨 통계\n---');

    Object.entries(prizeList).forEach(([match, { countMatch, prize }]) => {
      const COUNT_MATCH_OUTPUT =
        match === '5+1' ? '5개 일치, 보너스 볼 일치' : `${match}개 일치`;
      MissionUtils.Console.print(
        `${COUNT_MATCH_OUTPUT} (${prize.toLocaleString()}원) - ${countMatch}개`,
      );
    });

    const TOTAL_PRIZE = LottoMachine.calculateTotalPrize(prizeList);
    const PROFIT_RATE = (TOTAL_PRIZE / ticketAmount) * 100;
    MissionUtils.Console.print(`총 수익률은 ${PROFIT_RATE.toFixed(1)}%입니다.`);
  }
}

export default LottoOutput;
