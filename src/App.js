import { Console, MissionUtils, Random } from '@woowacourse/mission-utils';
// eslint-disable-next-line import/extensions
import Lotto from './Lotto.js';

class App {
  async play() {
    const MONEY = await this.inputMoney();
    const TICKETS = this.publishAllTicket(MONEY);
    const INPUT_NUMBERS = await this.getLottoNumber();
    const LOTTO_NUMBERS = new Lotto(INPUT_NUMBERS);
    const BONUS_NUMBERS = LOTTO_NUMBERS.getBonusNumber(LOTTO_NUMBERS);
  }

  async inputMoney() {
    const MONEY = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.checkMoney(MONEY);
    const LOTTO_CNT = Math.floor(Number(MONEY) / 1000);
    this.printMoney(LOTTO_CNT);
    return LOTTO_CNT;
  }

  // eslint-disable-next-line class-methods-use-this
  checkMoney(money) {
    if (!Number.isInteger(Number(money))) {
      throw new Error('[ERROR] 로또 금액은 정수여야 합니다.');
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액은 1000원 단위어야 합니다.');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  printMoney(money) {
    const PRINT_SENTENCE = `${money}개를 구매했습니다.`;
    Console.print(PRINT_SENTENCE);
  }

  // eslint-disable-next-line class-methods-use-this

  publishAllTicket(money) {
    const tickets = [];
    let oneTicket = [];
    for (let i = 0; i < money; i += 1) {
      oneTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
      tickets.push(oneTicket);
    }
    this.printTickets(money, tickets);
    return tickets;
  }

  // eslint-disable-next-line class-methods-use-this
  printTickets(money, tickets) {
    for (let i = 0; i < money; i += 1) {
      Console.print(this.makeTicketSentence(tickets[i]));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  makeTicketSentence(ticket) {
    let sentence = `[${ticket.map((num) => num).join(', ')}`;
    sentence += ']';
    return sentence;
  }

  async getLottoNumber() {
    const INPUT = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const INPUT_ARRAY = INPUT.split(',');
    for (let i = 0; i < INPUT_ARRAY.length; i += 1) {
      INPUT_ARRAY[i] = Number(INPUT_ARRAY[i]);
    }
    return INPUT_ARRAY;
  }
}

export default App;
