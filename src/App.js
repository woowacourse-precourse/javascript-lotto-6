import { Console, MissionUtils, Random } from '@woowacourse/mission-utils';
// eslint-disable-next-line import/extensions
import Lotto from './Lotto.js';

function compareNumbers(a, b) {
  return a - b;
}
class App {
  async play() {
    const MONEY = await this.inputMoney();
    const TICKETS = this.publishAllTicket(MONEY);
    const INPUT_NUMBERS = await this.getLottoNumber();
    const LOTTO_NUMBERS = new Lotto(INPUT_NUMBERS);
    const BONUS_NUMBERS = await LOTTO_NUMBERS.getBonusNumber(LOTTO_NUMBERS);
    const RESULT = LOTTO_NUMBERS.getLottoResult(TICKETS, INPUT_NUMBERS, BONUS_NUMBERS);
    this.printLottoResult(MONEY, RESULT);
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
    const PRINT_SENTENCE = `\n${money}개를 구매했습니다.`;
    Console.print(PRINT_SENTENCE);
  }

  // eslint-disable-next-line class-methods-use-this

  publishAllTicket(money) {
    const tickets = [];
    let oneTicket = [];
    for (let i = 0; i < money; i += 1) {
      oneTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
      oneTicket.sort(compareNumbers);
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

  // eslint-disable-next-line class-methods-use-this
  async getLottoNumber() {
    const INPUT = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const INPUT_ARRAY = INPUT.split(',');
    for (let i = 0; i < INPUT_ARRAY.length; i += 1) {
      INPUT_ARRAY[i] = Number(INPUT_ARRAY[i]);
    }
    return INPUT_ARRAY;
  }

  printLottoResult(money, result) {
    const PROFIT = this.calculateResult(money, result);
    const RESULT_SENTENCE = ['3개 일치 (5,000원) - ', '4개 일치 (50,000원) - ', '5개 일치 (1,500,000원) - ', '5개 일치, 보너스 볼 일치 (30,000,000원) - ', '6개 일치 (2,000,000,000원) - '];
    const PROFIT_SENTENCE = `총 수익률은 ${PROFIT}%입니다.`;
    Console.print('\n당첨 통계\n---');

    for (let i = 0; i < 5; i += 1) {
      Console.print(`${RESULT_SENTENCE[i] + result[i].toString()}개`);
    }
    Console.print(PROFIT_SENTENCE);
  }

  // eslint-disable-next-line class-methods-use-this
  calculateResult(money, result) {
    let profit = 0;
    const PRICE = [5000, 50000, 1500000, 30000000, 2000000000];
    for (let i = 0; i < 5; i += 1) {
      profit += PRICE[i] * result[i];
    }
    profit /= (money * 10);

    return profit.toFixed(1);
  }
}

export default App;
