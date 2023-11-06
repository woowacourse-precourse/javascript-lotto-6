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
    const ticketAmount = await this.getTicket();
    await this.getLottos(ticketAmount);
    await this.makeWinLotto();
    await this.makeBonusLotto();
    await this.winLottoCount();
    await this.printWinResult(this.lottoRanks);
  }

  async getTicket() {
    this.ticket = new Ticket();
    this.money = await this.ticket.getMoney();
    return this.ticket.purchase(this.money);
  }

  async getLottos(ticketAmount) {
    this.lottos = await Controller.getLottosList(ticketAmount);
  }

  async makeWinLotto() {
    while (true) {
      try {
        this.winLotto = await Console.readLineAsync(GAME_MESSAGES.WIN_LOTTO);
        this.winLotto = this.winLotto.split(",").map(Number);
        break;
      } catch (e) {
        Console.print(e);
      }
    }
    this.lotto = new Lotto(this.winLotto);
  }

  async makeBonusLotto() {
    while (true) {
      try {
        this.bonusLotto = await Console.readLineAsync(GAME_MESSAGES.BOUNS_LOTTO);
        this.lotto.validateBonusNumber(this.bonusLotto, this.winLotto);
        break;
      } catch (e) {
        Console.print(e);
      }
    }
  }

  async winLottoCount() {
    this.lottoRanks = await this.lotto.getLottoRanks(this.lottos, this.bonusLotto);
  }

  async printWinResult(lottoRanks) {
    Console.print(GAME_MESSAGES.WINNING_STATISTICS);
    Console.print(GAME_MESSAGES.NEW_LINE);
    this.lotto.printWinStatics(lottoRanks);
    this.profit = await this.lotto.getProfit(this.money, this.lottoRanks);
    Console.print(GAME_MESSAGES.TOTAL_PROFITABILITY.replace("%s", this.profit.toFixed(1)));
  }
}

export default App;
