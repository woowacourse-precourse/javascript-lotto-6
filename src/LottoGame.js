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
      MissionUtils.Console.print(ticket);
    }
  };

  getWinningNumbers = async () => {
    let numbers = await MissionUtils.Console.readLineAsync(
      Messages.WINNING_NUMBERS_INPUT
    );
    let parsedNumbers = numbers
      .split(',')
      .map((number) => number.trim())
      .filter((number) => number !== '');
    this.#winning_numbers = new Lotto(parsedNumbers);
  };

  getBonusNumber = async () => {
    const bonus = await MissionUtils.Console.readLineAsync(
      Messages.BONUS_NUMBER_INPUT
    );
    if (isNaN(bonus)) {
      throw new Error(Messages.ERROR_ISNAN);
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error(Messages.ERROR_NUMBER_OUT_OF_RANGE);
    }
    this.#bonus_number = bonus;
  };

  playGame = async () => {
    try {
      await this.getPurchaseAmount();
      this.generateNumbers(this.#purchase_amount);
      this.printPurchasedTickets(this.#purchased_tickets);
      await this.getWinningNumbers();
      await this.getBonusNumber();
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default LottoGame;
