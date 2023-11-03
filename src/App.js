import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class App {
  // 구입금액 출력 메서드
  async printTicketNumber() {
    // 구입금액 입력 (8)
    const purchaseAmountStr = await Console.readLineAsync(
      '구입금액을 입력해 주세요.',
    );
    const purchaseAmount = parseInt(purchaseAmountStr);
    Console.print(`${purchaseAmount / 1000}개를 구매했습니다.`);

    const lotto = new Lotto(null, purchaseAmount);
  }

  async play() {
    this.printTicketNumber();
  }
}

export default App;
