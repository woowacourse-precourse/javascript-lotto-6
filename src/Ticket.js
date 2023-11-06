import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES, MIN_LOTTO_PRICE, LOTTO_PRICE } from "./Constatns.js";

class Ticket {
  constructor() {
    this.money = 0;
    this.ticket = 0;
  }

  validateTicketMoney(money) {
    if (!money) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }

    if (isNaN(money)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }

    if (money < MIN_LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGES.PURCHASE_MONEY_INVALID);
    }

    if (money % LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGES.PURCHASE_MONEY_NOT_DIVISIBLE);
    }
  }

  purchase(money) {
    this.validateTicketMoney(money);
    this.ticket = money / LOTTO_PRICE;
    Console.print("");
    Console.print(this.ticket + GAME_MESSAGES.PURCHASE_TICKET_COUNT);
    return this.ticket;
  }
}

export default Ticket;
