import { Console } from '@woowacourse/mission-utils';
import { REGEXS } from '../constants/options.js';
import { INPUT_MESSEGE, ERROR } from '../constants/messages.js';
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
    this.#validateNumber(paymentAmount);
    this.#validateMoney(paymentAmount);

    return Number(paymentAmount) / 1000;
  }

  async receiveWinNumbers() {
    const winInput = await Console.readLineAsync(INPUT_MESSEGE.win);
    this.#validateWinNumbers(winInput.split(','));
    const numbers = winInput.split(',').map(Number);
    this.winNumber = new Lotto(numbers);
  }

  async receiveBonusNumber() {
    const bonusInput = await Console.readLineAsync(INPUT_MESSEGE.bonus);
    this.#validateNumber(bonusInput);
    this.#validateBonusNumber(this.winNumber, bonusInput);
    this.bonusNumber = Number(bonusInput);
  }

  #validateNumber(number) {
    if (!REGEXS.number.test(number)) {
      throw new Error(ERROR.notNumber);
    }
  }

  #validateMoney(paymentAmount) {
    if (paymentAmount < 1000 || Number(paymentAmount) % 1000 !== 0) {
      throw new Error(ERROR.invalidUnit);
    }
  }

  #validateWinNumbers(winNumbers) {
    winNumbers.forEach((number) => {
      this.#validateNumber(number);
    });
  }

  #validateBonusNumber(winNumbers, bonusNumber) {
    if (winNumbers.getLotto().includes(Number(bonusNumber))) {
      throw new Error(ERROR.duplicate);
    }
  }
}

export default TiketBooth;
