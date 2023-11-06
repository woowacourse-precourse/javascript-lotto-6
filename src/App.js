import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "./Constatns.js";
import Ticket from "./ticket.js";
import Lotto from "./Lotto.js";
import getLottos from "./getLottos.js";

class App {
  constructor() {
    this.ticket;
    this.ticketAmount;
    this.money;
    this.lotto;
    this.winLotto;
    this.bonusLotto;
    this.lottos;
    this.lottoRanks;
    this.profit;
  }

  async play() {
    await this.getTicket();
    await this.getLottos(this.ticketAmount);
    await this.makeWinLotto();
    await this.makeBonusLotto();
    await this.winLottoCount();
    await this.printWinResult(this.lottoRanks);
  }

  async getTicket() {
    this.ticket = new Ticket();
    this.money = await this.ticket.getMoney();
    this.ticketAmount = this.ticket.purchase(this.money);
  }

  async getLottos(ticketAmount) {
    this.lottos = getLottos.getLottosList(ticketAmount);
  }

  async makeWinLotto() {
    while (true) {
      try {
        this.winLotto = await Console.readLineAsync(GAME_MESSAGES.WIN_LOTTO);
        this.winLotto = this.winLotto.split(",").map(Number);
        this.lotto = new Lotto(this.winLotto);
        break;
      } catch (e) {
        Console.print(e);
      }
    }
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
    this.lottoRanks = this.lotto.getLottoRanks(this.lottos, this.bonusLotto);
  }

  async printWinResult(lottoRanks) {
    this.lotto.printWinStatics(lottoRanks);
    this.profit = this.lotto.getProfit(this.money, this.lottoRanks);
    Console.print(GAME_MESSAGES.TOTAL_PROFITABILITY.replace("%s", this.profit.toFixed(1)));
  }
}

export default App;
