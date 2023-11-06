import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "./Constatns.js";
import Ticket from "./ticket.js";
import Lotto from "./Lotto.js";
import Controller from "./Controller.js";

class App {
  constructor() {
    this.ticket = 0;
    this.money = 0;
    this.lotto = 0;
    this.winLotto = 0;
    this.lottos = [];
  }
  async play() {
    await this.getTicket();
  }

  async getTicket() {
    this.ticket = new Ticket();
    this.money = await Console.readLineAsync(GAME_MESSAGES.ENTER_TICKET_MONEY);
    const ticketAmount = this.ticket.purchase(this.money);
    this.getLottos(ticketAmount);
  }

  async getLottos(ticketAmount) {
    this.lottos = Controller.getLottos(ticketAmount);
    this.makeWinLotto();
  }

  async makeWinLotto() {
    this.winLotto = await Console.readLineAsync(GAME_MESSAGES.WIN_LOTTO);
  }
}

export default App;
