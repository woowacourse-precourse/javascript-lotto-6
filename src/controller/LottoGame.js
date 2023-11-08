import PurchaseAmount from '../domain/PurchaseAmount.js';
import LottoTickets from '../collection/LottoTickets.js';
import WinningNumber from '../domain/WinningNumber.js';
import BonusNumber from '../domain/BounsNumber.js';
import LottoWinStatistics from '../domain/LottoWinStatistics.js';

import LottoGameInput from '../view/LottoGameInput.js';
import LottoGameOutput from '../view/LottoGameOutput.js';
import LottoGameError from '../view/LottoGameError.js';

import GameUtils from '../utils/GameUtils.js';
import PRIZE_MONEY from '../constants/PrizeMoney.js';

class LottoGame {
  #purchaseAmount;

  #lottoTickets;

  #winningNumbers;

  #bonusNumber;

  #lottoWinStatistics;

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
    this.#lottoWinStatistics = new LottoWinStatistics();
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
    this.#lottoWinStatistics.pushPrize(prize);
  }

  calculateReturnRate() {
    const purchaseAmount = this.#purchaseAmount.getPurchaseAmount();
    this.#lottoWinStatistics.calculateReturnRate(purchaseAmount);
  }

  showLottoWinStatistics() {
    LottoGameOutput.showLottoStatistics();

    this.#showFifthPrize();
    this.#showFourthPrize();
    this.#showThirdPrize();
    this.#showSecondPrize();
    this.#showFirstPrize();

    const returnRate = this.#lottoWinStatistics.getReturnRate();
    LottoGameOutput.showReturnRate(returnRate);
  }

  #showFifthPrize() {
    const fifthCount = this.#lottoWinStatistics.getSpecificPrizeCount(
      PRIZE_MONEY.FIFTH,
    );
    LottoGameOutput.showFifthStatistics(fifthCount);
  }

  #showFourthPrize() {
    const fourthCount = this.#lottoWinStatistics.getSpecificPrizeCount(
      PRIZE_MONEY.FOURTH,
    );
    LottoGameOutput.showFourthStatistics(fourthCount);
  }

  #showThirdPrize() {
    const thirdCount = this.#lottoWinStatistics.getSpecificPrizeCount(
      PRIZE_MONEY.THIRD,
    );
    LottoGameOutput.showThirdStatistics(thirdCount);
  }

  #showSecondPrize() {
    const secondCount = this.#lottoWinStatistics.getSpecificPrizeCount(
      PRIZE_MONEY.SECOND,
    );
    LottoGameOutput.showSecondStatistics(secondCount);
  }

  #showFirstPrize() {
    const firstCount = this.#lottoWinStatistics.getSpecificPrizeCount(
      PRIZE_MONEY.FIRST,
    );
    LottoGameOutput.showFirstStatistics(firstCount);
  }

  end() {
    return this;
  }
}

export default LottoGame;
