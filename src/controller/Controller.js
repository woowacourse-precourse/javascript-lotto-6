import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSEGE } from '../constants/messages.js';
import TicketBooth from '../views/TicketBooth.js';
import Announcer from '../views/Announcer.js';
import LottoBundle from '../models/LottoBundle.js';
import WinLotto from '../models/WinLotto.js';
import Analyzer from '../models/Analyzer.js';

class Controller {
  #lottoBundle;
  #ticketBooth;
  #announcer;
  #analyzer;

  constructor() {
    this.#lottoBundle;
    this.#ticketBooth = new TicketBooth();
    this.#announcer = new Announcer();
    this.#analyzer = new Analyzer();
  }

  async startLottoGame() {
    await this.#purchaseLotto();
    await this.#drawWinNumbers();
    await this.#drawBonusNumber();
    this.#processLottoResults();
  }

  async #purchaseLotto() {
    try {
      const amount = await this.#ticketBooth.takePaymentForTickets();
      this.#lottoBundle = new LottoBundle(amount);
      this.#announcer.printLottoBundle(this.#lottoBundle);
    } catch (error) {
      await this.#handleErrorAndRetry(error, this.#purchaseLotto.bind(this));
    }
  }

  async #drawWinNumbers() {
    try {
      await this.#ticketBooth.receiveWinNumbers();
    } catch (error) {
      await this.#handleErrorAndRetry(error, this.#drawWinNumbers.bind(this));
    }
  }

  async #drawBonusNumber() {
    try {
      await this.#ticketBooth.receiveBonusNumber();
    } catch (error) {
      await this.#handleErrorAndRetry(error, this.#drawBonusNumber.bind(this));
    }
  }

  async #handleErrorAndRetry(error, retryProcess) {
    Console.print(error.message + ERROR_MESSEGE.invalideInput);
    await retryProcess();
  }

  #processLottoResults() {
    const winLotto = new WinLotto(this.#ticketBooth.getWinNumbers());
    const matchedNumberList = this.#lottoBundle.populateWinResult(winLotto);
    this.#analyzer.countWinningRank(matchedNumberList);
    this.#announcer.printResult(this.#analyzer);
  }
}

export default Controller;
