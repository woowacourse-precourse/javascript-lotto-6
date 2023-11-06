import Lotto from '../models/Lotto.js';
import LottoGenerator from '../models/LottoGenerator.js';
import LottoTicket from '../models/LottoTicket.js';
import PurchaseAmount from '../models/PurchaseAmount.js';
import WinningNumber from '../models/WinnigNumber.js';
import BonusNumber from '../models/BonusNumber.js';
import LottoTicketResult from '../models/LottoTicketResult.js';
import ReturnRate from '../models/ReturnRate.js';

class LottoController {
  #lottoCount;
  #winningNumber;
  #bonusNumber;
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    await this.setLottoCount();
    const lottoTicket = this.setLottoTicket();
    this.outputView.printLottoCount(this.#lottoCount);
    this.outputView.printLotto(lottoTicket);
    await this.setWinningNumber();
    await this.setBonusNumber();
    const lottoTicketResult = this.setLottoTicketResult(
      lottoTicket,
      this.#winningNumber,
      this.#bonusNumber
    );
    this.outputView.printLottoResult(lottoTicketResult);
    const returnRate = this.setReturnRate(this.#lottoCount, lottoTicketResult);
    this.outputView.printReturnRate(returnRate);
  }

  async setLottoCount() {
    while (true) {
      let purchaseAmountInput;
      try {
        purchaseAmountInput = await this.inputView.getPurchaseAmount();
        const purchaseAmount = new PurchaseAmount(purchaseAmountInput);
        this.#lottoCount = purchaseAmount.getLottoCount();
        break;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  setLottoTicket() {
    const lottoTicket = new LottoTicket();
    while (lottoTicket.getLottoTicketLength() !== this.#lottoCount) {
      try {
        const lotto = new Lotto(LottoGenerator.generator());
        lottoTicket.addLottoToLottoTicket(lotto.getLotto());
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
    return lottoTicket.getLottoTicket();
  }

  async setWinningNumber() {
    while (true) {
      let winningNumberInput;
      try {
        winningNumberInput = await this.inputView.getWinningNumber();
        const winningNumber = new WinningNumber(winningNumberInput);
        this.#winningNumber = winningNumber.getWinningNumber();
        break;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  async setBonusNumber() {
    while (true) {
      let bonusNumberInput;
      try {
        bonusNumberInput = await this.inputView.getBonusNumber();
        const bonusNumber = new BonusNumber(
          this.#winningNumber,
          bonusNumberInput
        );
        this.#bonusNumber = bonusNumber.getBonusNumber();
        break;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  setLottoTicketResult(lottoTicket, winningNumber, bonusNumber) {
    const lottoTicketResult = new LottoTicketResult(
      lottoTicket,
      winningNumber,
      bonusNumber
    );
    return lottoTicketResult.getLottoTicketResult();
  }

  setReturnRate(lottoCount, lottoTicketResult) {
    const returnRate = new ReturnRate(lottoCount, lottoTicketResult);
    return returnRate.getReturnRate();
  }
}

export default LottoController;
