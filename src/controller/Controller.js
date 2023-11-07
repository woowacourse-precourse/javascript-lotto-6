import { Console } from '@woowacourse/mission-utils';
import TiketBooth from '../views/TicketBooth.js';
import Announcer from '../views/Announcer.js';
import LottoBundle from '../models/LottoBundle.js';
import WinLotto from '../models/WinLotto.js';
import Analyzer from '../models/Analyzer.js';
import { ERROR } from '../constants/messages.js';

class Controller {
  constructor() {
    this.tiketBooth = new TiketBooth();
    this.announcer = new Announcer();
    this.lottoBundle;
    this.winNumbers;
    this.bonusNumber;
    this.matchedNumberList = [];
  }

  async startLottoGame() {
    await this.purchaseLotto();
    await this.drawWinNumbers();
    await this.drawBonusNumber();
    this.confirmLottoPrizes();
    this.drawLottoResults();
  }

  async purchaseLotto() {
    try {
      const amount = await this.tiketBooth.takePaymentForTickets();
      this.lottoBundle = new LottoBundle(amount);
      this.announcer.printLottoBundle(this.lottoBundle, amount);
    } catch (error) {
      Console.print(error.message + ERROR.invalideInput);
      await this.purchaseLotto();
    }
  }

  async drawWinNumbers() {
    try {
      this.winNumbers = await this.tiketBooth.receiveWinNumbers();
    } catch (error) {
      Console.print(error.message + ERROR.invalideInput);
      await this.drawWinNumbers();
    }
  }

  async drawBonusNumber() {
    try {
      this.bonusNumber = await this.tiketBooth.receiveBonusNumber(
        this.winNumbers
      );
    } catch (error) {
      Console.print(error.message + ERROR.invalideInput);
      await this.drawBonusNumber();
    }
  }

  confirmLottoPrizes() {
    const winLotto = new WinLotto(this.winNumbers, this.bonusNumber);
    this.lottoBundle.populateWinResult(winLotto, this.matchedNumberList);
  }

  drawLottoResults() {
    const analyzer = new Analyzer(this.matchedNumberList);
    this.announcer.printPrizeInfo(analyzer);
  }
}

export default Controller;
