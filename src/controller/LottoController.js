import Lotto from '../models/Lotto.js';
import LottoGenerator from '../models/LottoGenerator.js';
import LottoTicket from '../models/LottoTicket.js';
import PurchaseAmount from '../models/PurchaseAmount.js';
import WinningNumber from '../models/WinnigNumber.js';
import BonusNumber from '../models/BonusNumber.js';
import LottoTicketResult from '../models/LottoTicketResult.js';
import ReturnRate from '../models/ReturnRate.js';
import { LOTTO } from '../utils/constants.js';

class LottoController {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    const purchaseAmount = await this.#setPurchaseAmount();
    const lottoCount = this.#setLottoCount(purchaseAmount);
    const lottoTicket = this.#setLottoTicket(lottoCount);
    this.outputView.printLottoCount(lottoCount);
    this.outputView.printLotto(lottoTicket);
    const winningNumber = await this.#setWinningNumber();
    const bonusNumber = await this.#setBonusNumber(winningNumber);
    const lottoTicketResult = this.#setLottoTicketResult(
      lottoTicket,
      winningNumber,
      bonusNumber
    );
    this.outputView.printLottoResult(lottoTicketResult);
    const returnRate = this.#setReturnRate(purchaseAmount, lottoTicketResult);
    this.outputView.printReturnRate(returnRate);
  }

  async #setPurchaseAmount() {
    while (true) {
      let purchaseAmountInput;
      try {
        purchaseAmountInput = await this.inputView.getPurchaseAmount();
        const purchaseAmount = new PurchaseAmount(purchaseAmountInput);
        return purchaseAmount.getPurchaseAmount();
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  #setLottoCount(purchaseAmount) {
    return purchaseAmount / LOTTO.AMOUNT_UNIT;
  }

  #setLottoTicket(lottoCount) {
    const lottoTicket = new LottoTicket();
    while (lottoTicket.getLottoTicketLength() !== lottoCount) {
      try {
        const lotto = new Lotto(LottoGenerator.generator());
        lottoTicket.addLottoToLottoTicket(lotto.getLotto());
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
    return lottoTicket.getLottoTicket();
  }

  async #setWinningNumber() {
    while (true) {
      let winningNumberInput;
      try {
        winningNumberInput = await this.inputView.getWinningNumber();
        const winningNumber = new WinningNumber(winningNumberInput);
        return winningNumber.getWinningNumber();
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  async #setBonusNumber(winningNumber) {
    while (true) {
      let bonusNumberInput;
      try {
        bonusNumberInput = await this.inputView.getBonusNumber();
        const bonusNumber = new BonusNumber(winningNumber, bonusNumberInput);
        return bonusNumber.getBonusNumber();
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  #setLottoTicketResult(lottoTicket, winningNumber, bonusNumber) {
    const lottoTicketResult = new LottoTicketResult(
      lottoTicket,
      winningNumber,
      bonusNumber
    );
    return lottoTicketResult.getLottoTicketResult();
  }

  #setReturnRate(purchaseAmount, lottoTicketResult) {
    const returnRate = new ReturnRate(purchaseAmount, lottoTicketResult);
    return returnRate.getReturnRate();
  }
}

export default LottoController;
