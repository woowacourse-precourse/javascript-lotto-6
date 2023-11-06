import PurchaseAmount from '../domain/PurchaseAmount.js';
import LottoTickets from '../collection/LottoTickets.js';
import WinningNumber from '../domain/WinningNumber.js';
import BonusNumber from '../domain/BounsNumber.js';

import LottoGameInput from '../view/LottoGameInput.js';
import LottoGameOutput from '../view/LottoGameOutput.js';
import LottoGameError from '../view/LottoGameError.js';

import GameUtils from '../utils/GameUtils.js';

class LottoGame {
  #purchaseAmount;

  #lottoTickets;

  #winningNumbers;

  #bonusNumber;

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
      const winningNumbersInput = await LottoGameInput.inputSixWinningNumbers();
      this.#winningNumbers = new WinningNumber(winningNumbersInput);
    } catch (error) {
      LottoGameError.printInputWinningNumberError(error);
      await this.inputWinningNumbers();
    }
  }

  async inputBonusNumber() {
    try {
      const bonusNumber = await LottoGameInput.inputBonusNumber();
      const winningNumbers = this.#winningNumbers.getWinningNumbers();

      this.#bonusNumber = new BonusNumber(bonusNumber, winningNumbers);
    } catch (error) {
      LottoGameError.printInputBonusNumberError(error);
      await this.inputBonusNumber();
    }
  }

  compareLottoTicketsWin() {
    const buyingLottoTickets = this.#lottoTickets.getLottoTickets();

    buyingLottoTickets.forEach((lotto) => {
      const lottoNumbers = lotto.getLottoNumbers();
      this.#compareOneTicket(lottoNumbers);
    });
  }

  #compareOneTicket(lotto) {
    const winningNumber = this.#winningNumbers.getWinningNumbers();
    const bounsNumber = this.#bonusNumber.getBonusNumber();

    const differences = GameUtils.getDifferenceElements(lotto, winningNumber);
    const prize = GameUtils.getPrize(differences, bounsNumber);
  }
}

export default LottoGame;
