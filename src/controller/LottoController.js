import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import AmountValidator from '../validator/AmountValidator.js';
import { NUMBERS } from '../constants/constants.js';
import LottoMachine from '../model/LottoMachine.js';
import Lotto from '../model/Lotto.js';
import LottoResult from '../model/LottoResult.js';

class LottoController {
  #amount;

  #lottoWinningNumbers;

  #userLottoNumber;

  #userBonusNumber;

  #lottoResult;

  async startLotto() {
    this.#amount = await this.getAmount();
    this.#lottoWinningNumbers = this.getLottoWinningNumbers(this.#amount);
    this.#userLottoNumber = await this.getUserLottoNumber();
    this.#userBonusNumber = await this.getUserBonusNumber(
      this.#userLottoNumber,
    );
    this.#lottoResult = this.getLottoResult(
      this.#lottoWinningNumbers,
      this.#userLottoNumber,
      this.#userBonusNumber,
    );
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

  async getUserBonusNumber(userLottoNumber) {
    try {
      const userBonusNumber = await InputView.readBonusNumber();
      return userBonusNumber;
    } catch (error) {
      OutputView.pritnError(error.message);
      return this.getUserBonusNumber();
    }
  }

  getLottoResult(winningNumbers, userNumber, bonusNumber) {
    const lottoResult = new LottoResult(
      winningNumbers,
      userNumber,
      bonusNumber,
    )

    const result = lottoResult.getResult();

    OutputView.printLottoResult(result);

    return result;
  }
}

export default LottoController;
