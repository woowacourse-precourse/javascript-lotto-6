import { Console } from '@woowacourse/mission-utils';

export class View {
  async getLottoPerchaseAmount() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.');
  }
  printLottoTickets(array) {
    Console.print(`총 ${array.length}개를 구매했습니다.`);
    array.forEach((lottoTicket) => {
      Console.print(lottoTicket);
    });
  }

  async getLottoWinningNumbers() {
    return await Console.readLineAsync('당첨 번호를 입력해 주세요.');
  }

  async getBonusLottoNumber() {
    return await Console.readLineAsync('보너스 번호를 입력해 주세요.');
  }
}
