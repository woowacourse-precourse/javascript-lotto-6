import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES, MIN_LOTTO_PRICE, LOTTO_PRICE } from "./Constatns.js";

class Ticket {
  constructor() {
    this.money = 0;
    this.ticket = 0;
  }

  validateTicketMoney(money) {
    if (!money) {
      throw ERROR_MESSAGES.EMPTY_INPUT;
    }

    if (isNaN(money)) {
      throw ERROR_MESSAGES.NOT_NUMBER;
    }

    if (money < MIN_LOTTO_PRICE) {
      throw ERROR_MESSAGES.PURCHASE_MONEY_INVALID;
    }

    if (money % LOTTO_PRICE) {
      throw ERROR_MESSAGES.PURCHASE_MONEY_NOT_DIVISIBLE;
    }
  }

  async getMoney() {
    while (true) {
      try {
        let money = await Console.readLineAsync(GAME_MESSAGES.ENTER_TICKET_MONEY);
        this.validateTicketMoney(money);
        return money;
      } catch (e) {
        Console.print(e);
      }
    }
  }

  purchase(money) {
    this.ticket = money / LOTTO_PRICE;
    Console.print("\n" + this.ticket + GAME_MESSAGES.PURCHASE_TICKET_COUNT);
    return this.ticket;
  }
}

export default Ticket;
