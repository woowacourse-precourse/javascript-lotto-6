import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';

class App {
  async play() {
    try {
      const purchaseAmount = await this.inputPurchaseAmount();
      const tickets = this.generateLottoTickets(purchaseAmount);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      this.play();
    }
  }

  // 로또 구입 금액 입력
  async inputPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      '구입 금액을 입력해 주세요.'
    );
    const amount = Number(input);
    if (Number.isNaN(amount) || amount % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.'
      );
    }
    return amount;
  }

  // 로또 구입 금액에 따라 티켓 생성
  generateLottoTickets(amount) {
    const tickets = [];
    const ticketCount = amount / 1000;

    for (let i = 0; i < ticketCount; i++) {
      const ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      tickets.push(ticket);
    }

    return tickets;
  }
}

export default App;
