import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "./Constatns.js";

class Ticket {
  constructor(ticket) {
    this.ticket = null;
  }

  validateTicketMoney(money) {
    if (!money) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }

    if (isNaN(money)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }

    if (money < MIN_LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }

    if (money % LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGES.NOT_);
    }
  }

  purchase() {
    Console.readLine(GAME_MESSAGES.ENTER_TICKET_MONEY, (money) => {
      validateTicketMoney(money);
    });
  }
}

export default Ticket;
