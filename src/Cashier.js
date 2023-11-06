import { ERROR_MESSAGE, LOTTO_FORM } from './constant';
import { getLottoRandomNumbers, printMessage, throwError } from './utils';
import Lotto from './Lotto';
class Cashier {
  #numberOfTickets = 0;
  constructor(user) {
    this.user = user;
  }

  isNumber(money) {
    if (typeof money !== 'number' || Number.isNaN(money))
      throwError(ERROR_MESSAGE.isNotNumber);
  }
  validatePayment(money) {
    if (money < LOTTO_FORM.price || money % LOTTO_FORM.price)
      throwError(ERROR_MESSAGE.payment);
  }

  async getPayment() {
    let paymentAmount;
    while (!paymentAmount) {
      try {
        const money = await this.user.pay();
        this.isNumber(money);
        this.validatePayment(money);
        paymentAmount = money;
      } catch (error) {
        paymentAmount = undefined;
      }
    }
    return paymentAmount;
  }

  getNumberOfTickets(money) {
    const number = money / LOTTO_FORM.price;
    this.#numberOfTickets = number;
    return number;
  }
  issueLottos() {
    return Array.from({ length: this.#numberOfTickets }).map(
      () => new Lotto(getLottoRandomNumbers()),
    );
  }
}

export default Cashier;
