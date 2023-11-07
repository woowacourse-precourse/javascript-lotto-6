import { Console } from '@woowacourse/mission-utils';
import { REGEXS } from '../constants/options.js';
import { INPUT_MESSEGE, ERROR } from '../constants/messages.js';
import Lotto from '../models/Lotto.js';

class TiketBooth {
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

    return new Lotto(numbers);
  }

  async receiveBonusNumber(winNumbers) {
    const bonusInput = await Console.readLineAsync(INPUT_MESSEGE.bonus);
    this.#validateNumber(bonusInput);
    this.#validateBonusNumber(winNumbers, bonusInput);

    return Number(bonusInput);
  }

  #validateNumber(number) {
    if (!REGEXS.NUMBER.test(number)) {
      throw new Error(ERROR.notNumber);
    }
  }

  #validateMoney(paymentAmount) {
    if (Number(paymentAmount) % 1000 !== 0) {
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
