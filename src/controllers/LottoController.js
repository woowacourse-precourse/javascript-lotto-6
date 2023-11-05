import { Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import PROPMT_MESSAGE from '../constants/propmtMessage.js';
import ERROR_MESSAGE from '../constants/erroeMessage.js';
import LottoStore from '../models/LottoStore.js';

const { bonusNumber, winningNumber, purchasePrice } = PROPMT_MESSAGE;
const { purchaseInvalidAmount } = ERROR_MESSAGE;

class LottoController {
  // propmt
  purchasedPrice;

  purchasedAmount;

  // FINAL
  LOTTO_PRICE = '1000';

  async buyLotto() {
    this.purchasedPrice = await this.propmtPurchasedPrice();
    this.purchasedAmount = this.calculateAmount(
      this.purchasedPrice,
      this.LOTTO_PRICE,
    );

    const lottoStore = new LottoStore(this.purchasedAmount);
    const lottos = lottoStore.createLottoTickets();
  }

  async propmtPurchasedPrice() {
    const { readLineAsync } = InputView;
    const { printOutput } = OutputView;

    try {
      const price = await readLineAsync(purchasePrice);
      if (this.validatePrice(price, this.LOTTO_PRICE)) {
        throw new Error();
      }
      return price;
    } catch (error) {
      printOutput(purchaseInvalidAmount);
      return this.propmtPurchasedPrice();
    }
  }

  validatePrice(price, lottoPrice) {
    return price % lottoPrice !== 0;
  }

  calculateAmount(price, lottoPrice) {
    return price / lottoPrice;
  }
}
export default LottoController;
