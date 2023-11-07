import { MissionUtils } from '@woowacourse/mission-utils';

function lottoTicketMessage(lotto) {
  const message = lotto.numbers.join(', ');
  return `[${message}]`;
}

class Printer {
  static print(content) {
    MissionUtils.Console.print(content);
  }

  static printLottoTicket(ticket) {
    Printer.print(`${ticket.length}개를 구매했습니다.`);
    ticket.forEach((lotto) => {
      Printer.print(lottoTicketMessage(lotto));
    });
  }

  static printStastics({ matchesCount, earningRate }) {
    Printer.print(`3개 일치 (5,000원) - ${matchesCount[3]}개`);
    Printer.print(`4개 일치 (50,000원) - ${matchesCount[4]}개`);
    Printer.print(`5개 일치 (1,500,000원) - ${matchesCount[5]}개`);
    Printer.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchesCount.bonus}개`);
    Printer.print(`6개 일치 (2,000,000,000원) - ${matchesCount[6]}개`);
    Printer.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default Printer;
