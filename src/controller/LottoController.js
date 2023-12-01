import InputView from '../view/InputView.js';
import amountValidator from '../validator/amountValidator.js';
import OutputView from '../view/OutputView.js';
import AmountValidator from '../validator/amountValidator.js';
import { NUMBERS } from '../constants/constants.js';
import LottoMachine from '../model/LottoMachine.js';

class LottoController {
  #amount;

  #lottoWinningNumbers;

  async startLotto() {
    this.#amount = await this.getAmount();
    this.#lottoWinningNumbers = this.getLottoWinningNumbers(this.#amount);
  }

  async getAmount() {
    try {
      const amount = await InputView.readAmount();
      AmountValidator.validation(amount);
      return amount;
    } catch (error) {
      OutputView.pritnError(error.message);
      return this.getAmount();
    }
  }

  getLottoWinningNumbers(amount) {
    const lottoTicketQuantity = amount / NUMBERS.purchaseUnit;

    OutputView.printQuentity(lottoTicketQuantity);

    const lottoWinningNumbers =
      LottoMachine.getLottoWinningNumbers(lottoTicketQuantity);

    lottoWinningNumbers.map(winningNumber =>
      OutputView.printLottoWinningNumbers(winningNumber),
    );

    return lottoWinningNumbers;
  }
}

export default LottoController;
