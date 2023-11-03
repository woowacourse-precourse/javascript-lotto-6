import { ERROR_MESSAGE, LOTTO_FORM } from './constant';
import { getLottoRandomNumbers, throwError } from './uttils';
import Lotto from './Lotto';
class Cashier {
  #numberOfTickets = 0;

  constructor(money) {
    this.#validatePayment(money);
    this.getNumberOfTickets(money);
  }

  #validatePayment(money) {
    if (money < LOTTO_FORM.price || money % LOTTO_FORM.price)
      throwError(ERROR_MESSAGE.payment);
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
