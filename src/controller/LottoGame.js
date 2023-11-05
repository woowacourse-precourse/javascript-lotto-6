import PurchaseAmount from '../domain/PurchaseAmount.js';
import LottoGameInput from '../view/LottoGameInput.js';
import LottoGameOutput from '../view/LottoGameOutput.js';
import GameUtils from '../utils/GameUtils.js';
import LottoTickets from '../collection/LottoTickets.js';
import WinningNumber from '../domain/WinningNumber.js';
import LottoGameError from '../view/LottoGameError.js';

class LottoGame {
  #purchaseAmount;

  #lottoTickets;

  #winningNumbers;

  start() {
    return this;
  }

  async inputPurchaseAmount() {
    try {
      const amount = await LottoGameInput.purchaseAmount();
      this.#purchaseAmount = new PurchaseAmount(amount);
    } catch (error) {
      LottoGameError.purchaseAmountError(error);
      await this.inputPurchaseAmount();
    }
  }

  issueLottoTickets() {
    const amount = this.#purchaseAmount.getPurchaseAmount();
    const lottoTicketsCount = GameUtils.dividedByThousand(amount);

    this.#lottoTickets = new LottoTickets(lottoTicketsCount);
    LottoGameOutput.showAllIssuedLottoTickets(
      this.#lottoTickets.getLottoTickets(),
    );
  }

  async inputWinningNumbers() {
    try {
      const winningNumbers = await LottoGameInput.inputSixWinningNumbers();
      this.winningNumbers = new WinningNumber(winningNumbers);
    } catch (error) {
      LottoGameError.printInputWinningNumberError(error);
      await this.inputWinningNumbers();
    }
  }
}

export default LottoGame;
