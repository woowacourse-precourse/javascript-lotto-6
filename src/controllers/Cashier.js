import { MESSAGE } from '../constants/Message.js';
import { LOTTO_FORM } from '../constants/Rule.js';
import { getLottoRandomNumbers } from '../utils/index.js';
import Lotto from '../Lotto.js';
import InputController from './InputController.js';
import OutputController from './OutputController.js';
import { Payment } from '../models/index.js';

class Cashier {
  #numberOfTickets = 0;

  async getPayment() {
    let paymentAmount;
    while (!paymentAmount) {
      try {
        const money = await InputController.readNumber(MESSAGE.paymentQuery);
        paymentAmount = new Payment(money).getMoney();
        break;
      } catch (error) {
        paymentAmount = undefined;
        OutputController.printErrorMessage(error);
      }
    }
    return paymentAmount;
  }
  /**
   *
   * @param {number} paymentAmount
   */
  getNumberOfTickets(paymentAmount) {
    const number = paymentAmount / LOTTO_FORM.price;
    this.#numberOfTickets = number;
  }

  issueLottos() {
    return Array.from({ length: this.#numberOfTickets }).map(
      () => new Lotto(getLottoRandomNumbers()),
    );
  }
}

export default Cashier;
