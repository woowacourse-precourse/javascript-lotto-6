import { MissionUtils } from '@woowacourse/mission-utils';

const BUY_TICEKT_ERROR_MESSAGE = `
  [ERROR] : 올바른 티켓 구매 금액을 입력하세요.
    티켓 구매 금액의 조건은 다음과 같습니다.
    - 1000 단위로 나누어 떨어져야 합니다.
    - 숫자이외의 다른 값이 입력되어서는 안됩니다.
`;

const BONUSNUM_ERROR_MESSAGE = `
  [ERROR] : 올바른 당첨 번호를 입력하세요.
    당첨 번호의 조건은 다음과 같습니다.
    - 쉼표로 구분되어야 하며 띄어쓰기가 없어야 합니다.
    - ex) 1,2,3,4,5,6.
    - 숫자 이외의 값을 입력해서는 안됩니다.
    - 당첨 번호는 반드시 6글자여야 합니다.
    - 1~45이내의 숫자를 반드시 입력하여야 합니다.
`;

const WINUM_ERROR_MESSAGE = `
[ERROR] : 올바른 당첨 번호를 입력하세요.
  당첨 번호의 조건은 다음과 같습니다.
  - 쉼표로 구분되어야 하며 띄어쓰기가 없어야 합니다.
  - ex) 1,2,3,4,5,6.
  - 숫자 이외의 값을 입력해서는 안됩니다.
  - 당첨 번호는 반드시 6글자여야 합니다.
  - 1~45이내의 숫자를 반드시 입력하여야 합니다.
`;

function lottoTicketMessage(lotto) {
  const message = lotto.numbers.join(', ');
  return `[${message}]`;
}

class Printer {
  static print(content) {
    MissionUtils.Console.print(content);
  }

  static printBuyTicketErrorMessage(error) {
    Printer.print(BUY_TICEKT_ERROR_MESSAGE);
    Printer.print(error);
  }

  static printWinNumsErrorMessage(error) {
    Printer.print(WINUM_ERROR_MESSAGE);
    Printer.print(error);
  }

  static printBonusNumErrorMessage(error) {
    Printer.print(BONUSNUM_ERROR_MESSAGE);
    Printer.print(error);
  }

  static printLottoTicket(ticket) {
    Printer.print(`${ticket.length}개를 구매했습니다.`);
    ticket.forEach((lotto) => {
      Printer.print(lottoTicketMessage(lotto));
    });
  }

  static printStatistics({ matchesCount, earningRate }) {
    Printer.print(`3개 일치 (5,000원) - ${matchesCount[3]}개`);
    Printer.print(`4개 일치 (50,000원) - ${matchesCount[4]}개`);
    Printer.print(`5개 일치 (1,500,000원) - ${matchesCount[5]}개`);
    Printer.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchesCount.bonus}개`);
    Printer.print(`6개 일치 (2,000,000,000원) - ${matchesCount[6]}개`);
    Printer.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default Printer;
