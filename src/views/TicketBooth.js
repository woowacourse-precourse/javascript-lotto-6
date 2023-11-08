import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSEGE, ERROR_MESSEGE } from '../constants/messages.js';
import { OPTIONS } from '../constants/lottoConstants.js';
import REGEXS from '../constants/regexs.js';
import Lotto from '../models/Lotto.js';

class TiketBooth {
  constructor() {
    this.winNumber;
    this.bonusNumber;
  }

  getWinNumbers() {
    return [this.winNumber, this.bonusNumber];
  }

  async takePaymentForTickets() {
    const paymentAmount = await Console.readLineAsync(INPUT_MESSEGE.purchase);
    this.#validateMoney(paymentAmount);

    return Number(paymentAmount) / OPTIONS.unit;
  }

  async receiveWinNumbers() {
    const winInput = await Console.readLineAsync(INPUT_MESSEGE.win);
    this.#validateWinNumbers(winInput.split(','));
    const numbers = winInput.split(',').map(Number);
    this.winNumber = new Lotto(numbers);
  }

  async receiveBonusNumber() {
    const bonusInput = await Console.readLineAsync(INPUT_MESSEGE.bonus);
    this.#validateBonusNumber(this.winNumber, bonusInput);
    this.bonusNumber = Number(bonusInput);
  }

  #validateMoney(paymentAmount) {
    this.#validateNumber(paymentAmount);
    if (paymentAmount < OPTIONS.unit || Number(paymentAmount) % OPTIONS.unit) {
      throw new Error(ERROR_MESSEGE.invalidUnit);
    }
  }

  #validateWinNumbers(winNumbers) {
    winNumbers.forEach((number) => {
      this.#validateNumber(number);
      this.#validateRange(number);
    });
  }

  #validateBonusNumber(winNumbers, bonusNumber) {
    this.#validateNumber(bonusNumber);
    this.#validateRange(bonusNumber);
    if (winNumbers.getLotto().includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSEGE.duplicate);
    }
  }

  #validateNumber(number) {
    if (!REGEXS.number.test(number)) {
      throw new Error(ERROR_MESSEGE.notNumber);
    }
  }

  #validateRange(number) {
    if (OPTIONS.minNumber < number && number > OPTIONS.maxNumber) {
      throw new Error(ERROR_MESSEGE.notInRange);
    }
  }
}

export default TiketBooth;
