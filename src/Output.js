import { Console } from '@woowacourse/mission-utils';

class Output {
  error(message) {
    Console.print(message);
  }

  lottoTicketCount(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);
  }

  lottoTicketNumbers(tickets) {
    tickets.forEach((ticket) => ticket.printLottoNumbers());
  }

  winningResult(results) {
    Console.print('당첨 통계');
    Console.print('---');

    Console.print(`3개 일치 (5,000원) - ${results['5']}개`);
    Console.print(`4개 일치 (50,000원) - ${results['4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results['3']}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results['2']}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results['1']}개`);
  }

  totalReturnResult(totalReturn) {
    Console.print(`총 수익률은 ${Math.round(totalReturn * 100) / 100}%입니다.`);
  }
}

export default Output;
