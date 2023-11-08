import { Console } from '@woowacourse/mission-utils';
import TiketBooth from '../views/TicketBooth.js';
import Announcer from '../views/Announcer.js';
import LottoBundle from '../models/LottoBundle.js';
import WinLotto from '../models/WinLotto.js';
import Analyzer from '../models/Analyzer.js';
import { ERROR } from '../constants/messages.js';

class Controller {
  #lottoBundle;

  constructor() {
    this.tiketBooth = new TiketBooth();
    this.announcer = new Announcer();
    this.analyzer = new Analyzer();
    this.#lottoBundle;
  }

  async startLottoGame() {
    await this.purchaseLotto();
    await this.drawWinNumbers();
    await this.drawBonusNumber();
    this.processLottoResults();
  }

  async purchaseLotto() {
    try {
      const amount = await this.tiketBooth.takePaymentForTickets();
      this.#lottoBundle = new LottoBundle(amount);
      this.announcer.printLottoBundle(this.#lottoBundle, amount);
    } catch (error) {
      Console.print(error.message + ERROR.invalideInput);
      await this.purchaseLotto();
    }
  }

  async drawWinNumbers() {
    try {
      await this.tiketBooth.receiveWinNumbers();
    } catch (error) {
      Console.print(error.message + ERROR.invalideInput);
      await this.drawWinNumbers();
    }
  }

  async drawBonusNumber() {
    try {
      await this.tiketBooth.receiveBonusNumber();
    } catch (error) {
      Console.print(error.message + ERROR.invalideInput);
      await this.drawBonusNumber();
    }
  }

  processLottoResults() {
    const winLotto = new WinLotto(this.tiketBooth.getWinNumbers());
    const matchedNumberList = this.#lottoBundle.populateWinResult(winLotto);
    this.analyzer.countWinningRank(matchedNumberList);
    this.announcer.printPrize(this.analyzer);
  }
}

export default Controller;
