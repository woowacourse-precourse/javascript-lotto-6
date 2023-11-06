import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    let purchaseAmount;
    while (1) {
      try {
        purchaseAmount = parseInt( await Console.readLineAsync("구입금액을 입력해 주세요."));
        if (purchaseAmount % 1000 !== 0 || isNaN(purchaseAmount)) {
          throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    const numberOfLottoTickets = Math.floor(purchaseAmount / 1000);
    const lottoTickets = this.generateLottoTickets(numberOfLottoTickets);

    Console.print(`${numberOfLottoTickets}개를 구매했습니다.`);

    lottoTickets.forEach((ticket, index) => {
      Console.print(ticket.getNumbers().sort((a, b) => a - b));
    });

  }

  generateLottoTickets(count) {
    const lottoTickets = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottoTicket = new Lotto(numbers);
      lottoTickets.push(lottoTicket);
    }
    return lottoTickets;
  }
}

export default App;
