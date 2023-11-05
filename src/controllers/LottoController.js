import InputView from './../views/InputView.js';
import OutputView from './../views/OutputView.js';
import PROPMT_MESSAGE from '../constants/propmtMessage.js';

const { bonusNumber, winningNumber, purchasePrice } = PROPMT_MESSAGE;

class LottoController {
  // propmt
  purchasedPrice;

  purchasedAmount;

  // FINAL
  LOTTO_PRICE = '1000';

  async buyLotto() {
    this.purchasedPrice = await this.propmtPurchasedPrice();
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
      printOutput('[ERROR]ㅠ.ㅠ 에러!!');
      return this.propmtPurchasedPrice();
    }
  }

  validatePrice(price, lottoPrice) {
    return price % lottoPrice !== 0;
  }
}
export default LottoController;
