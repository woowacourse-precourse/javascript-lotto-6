import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const tickets = this.createTickets(purchaseAmount);

    this.printTickets(tickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
  }
  
  async getPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return input;
  }

  async getWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const numbers = input.split(',').map((x) => Number(x));
    const lotto = new Lotto(numbers);
    return lotto;
  }

  async getBonusNumber(winningNumbers) {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(input);
    return bonusNumber;
  }

  createTickets(amount) {
    this.validateAmount(amount);

    const count = amount / 1000;
    const tickets = [];

    for (let i = 0; i < count; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const newTicket = new Lotto(numbers);
      tickets.push(newTicket);
    }
    
    return tickets;
  }

  printTickets(tickets) {
    const count = tickets.length;
    MissionUtils.Console.print(`\n${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i += 1) {
      const numbers = tickets[i].getLottoNumbers();
      const text = numbers.join(', ');
      MissionUtils.Console.print(`[${text}]`);
    }
  }

  validateAmount(amount) {
    const remainder = amount % 1000;
    if (remainder) throw new Error('[ERROR] Amount isn\'t valid.');
  }
}

export default App;
