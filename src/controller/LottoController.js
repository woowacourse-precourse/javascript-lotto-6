import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import AmountValidator from '../validator/AmountValidator.js';
import { NUMBERS } from '../constants/constants.js';
import LottoMachine from '../model/LottoMachine.js';
import Lotto from '../model/Lotto.js';

class LottoController {
  #amount;

  #lottoWinningNumbers;

  #userLottoNumber;

  async startLotto() {
    this.#amount = await this.getAmount();
    this.#lottoWinningNumbers = this.getLottoWinningNumbers(this.#amount);
    this.#userLottoNumber = this.getUserLottoNumber();
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

  async getUserLottoNumber() {
    try {
      const userLottoNumber = new Lotto(
        await InputView.readLottoNumber(),
      ).getNumbers();

      return userLottoNumber;
    } catch (error) {
      OutputView.pritnError(error.message);
      return this.getUserLottoNumber();
    }
  }
}

export default LottoController;
