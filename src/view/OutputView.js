import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printLottoTicketCount(count) {
    Console.print(`\n${count}개 구매했습니다.`);
  }
}

export default OutputView;
