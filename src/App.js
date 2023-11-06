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
    this.bonusLotto = 0;
    this.lottos = [];
    this.lottoRanks = [];
    this.profit = 0;
  }

  async play() {
    await this.getTicket();
  }

  async getTicket() {
    this.money = await Console.readLineAsync(GAME_MESSAGES.ENTER_TICKET_MONEY);
    this.ticket = new Ticket();
    const ticketAmount = this.ticket.purchase(this.money);
    this.getLottos(ticketAmount);
  }

  async getLottos(ticketAmount) {
    this.lottos = Controller.getLottos(ticketAmount);
    this.makeWinLotto();
  }

  async makeWinLotto() {
    this.winLotto = await Console.readLineAsync(GAME_MESSAGES.WIN_LOTTO);
    this.winLotto = this.winLotto.split(",").map(Number);
    Console.print("");
    this.makeBonusLotto();
  }

  async makeBonusLotto() {
    this.bonusLotto = await Console.readLineAsync(GAME_MESSAGES.BOUNS_LOTTO);
    Console.print("");
    this.winLottoCount();
  }

  async winLottoCount() {
    this.lotto = new Lotto(this.winLotto);
    this.lottoRanks = await this.lotto.getLottoRanks(this.lottos, this.bonusLotto);
    this.printWinResult(this.lottoRanks);
  }

  async printWinResult(lottoRanks) {
    Console.print(GAME_MESSAGES.WINNING_STATISTICS);
    Console.print(GAME_MESSAGES.NEW_LINE);
    GAME_MESSAGES.WINNING_RESULT.forEach((winMessage, idx) => {
      Console.print(winMessage + " " + lottoRanks[idx] + GAME_MESSAGES.COUNT);
    });
    Console.print("");
    this.printprofitResult();
  }

  async printprofitResult() {
    this.profit = await this.lotto.getProfit(this.money, this.lottoRanks);
    Console.print(GAME_MESSAGES.TOTAL_PROFITABILITY.replace("%s", this.profit.toFixed(1)));
  }
}

export default App;
