import { MissionUtils } from '@woowacourse/mission-utils';
import Messages from './Messages.js';
import Lotto from './Lotto.js';

class LottoGame {
  #purchase_amount;
  #purchased_tickets;
  #winning_numbers;
  #bonus_number;

  getPurchaseAmount = async () => {
    const input_amount = await MissionUtils.Console.readLineAsync(
      Messages.PURCHASE_AMOUNT_INPUT
    );
    if (input_amount === '') {
      throw new Error(Messages.ERROR_IS_BLANK);
    }
    if (isNaN(input_amount)) {
      throw new Error(Messages.ERROR_ISNAN);
    }
    if (input_amount % 1000 !== 0) {
      throw new Error(Messages.ERROR_PURCHASE_AMOUNT_NOT_DIVIDED);
    }
    this.#purchase_amount = parseInt(input_amount) / 1000;
  };

  generateNumbers = (count) => {
    let tickets = [];
    for (let i = 0; i < count; i++) {
      let ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket.sort((a, b) => a - b);
      tickets.push(ticket);
    }
    this.#purchased_tickets = tickets;
  };

  printPurchasedTickets = (tickets) => {
    MissionUtils.Console.print(
      '\n' + tickets.length + Messages.PURCHASED_TICKET_PRINT
    );
    for (let ticket of tickets) {
      MissionUtils.Console.print(`[${ticket.join(', ')}]`);
    }
  };

  getWinningNumbers = async () => {
    let numbers = await MissionUtils.Console.readLineAsync(
      Messages.WINNING_NUMBERS_INPUT
    );
    let parsedNumbers = numbers
      .split(',')
      .map((number) => number.trim())
      .filter((number) => number !== '')
      .map((number) => parseInt(number));
    const winning_lotto = new Lotto(parsedNumbers);
    this.#winning_numbers = winning_lotto.getNumbers();
  };

  getBonusNumber = async () => {
    let bonus = await MissionUtils.Console.readLineAsync(
      Messages.BONUS_NUMBER_INPUT
    );
    if (isNaN(bonus)) {
      throw new Error(Messages.ERROR_ISNAN);
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error(Messages.ERROR_NUMBER_OUT_OF_RANGE);
    }
    if (this.#winning_numbers.includes(parseInt(bonus))) {
      throw new Error(Messages.ERROR_BONUS_NUMBER_DUPLICATED);
    }
    this.#bonus_number = parseInt(bonus);
  };

  calculateWinningStats = () => {
    let stats = [0, 0, 0, 0, 0];
    for (let ticket of this.#purchased_tickets) {
      let winningCount = 0;
      for (let number of ticket) {
        if (this.#winning_numbers.includes(number)) {
          winningCount++;
        }
      }
      if (winningCount === 5 && ticket.includes(this.#bonus_number)) {
        stats[4]++;
      }
      stats[winningCount - 3]++;
    }
    return stats;
  };

  calculateProfit = (stats) => {
    let profit = 0;
    const rewards = [5000, 50000, 1500000, 2000000000, 30000000];
    for (let i = 0; i < stats.length; i++) {
      profit += stats[i] * rewards[i];
    }
    profit = (profit / (this.#purchase_amount * 1000)) * 100;
    profit = parseFloat(profit).toFixed(1);
    const parts = profit.toString().split('.');
    const result =
      Number(parts[0]).toLocaleString('ko-KR') +
      (parts[1] ? '.' + parts[1] : '');
    return result;
  };

  printWinningStats = () => {
    const stats = this.calculateWinningStats();
    const profit = this.calculateProfit(stats);
    MissionUtils.Console.print(Messages.WINNING_STATISTICS_PRINT);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${stats[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${stats[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${stats[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats[4]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${stats[3]}개`);
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
  };

  playGame = async () => {
    try {
      await this.getPurchaseAmount();
      this.generateNumbers(this.#purchase_amount);
      this.printPurchasedTickets(this.#purchased_tickets);
      await this.getWinningNumbers();
      await this.getBonusNumber();
      this.printWinningStats();
    } catch {
      MissionUtils.Console.print(Messages.ERROR_DEFAULT);
    }
  };
}

export default LottoGame;
