import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES, MIN_LOTTO_PRICE, LOTTO_PRICE } from "./Constatns.js";
import Ticket from "./ticket.js";
import Lotto from "./Lotto.js";
import Controller from "./Controller.js";

class App {
  constructor() {
    this.ticket = 0;
    this.money = 0;
    this.lotto = 0;
  }
  async play() {
    await this.getTicket();
  }

  async getTicket() {
    this.ticket = new Ticket();
    Console.readLine(GAME_MESSAGES.ENTER_TICKET_MONEY, (money) => {
      const ticketAmount = this.ticket.purchase(money);
      this.getLottos(ticketAmount);
    });
  }

  async getLottos(ticketAmount) {
    Controller.getLottos(ticketAmount);
  }
}

export default App;
