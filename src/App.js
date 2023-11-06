import Lotto from './Lotto.js';
import BuyLotto from './BuyLotto.js';

const LOTTO_PRICE = 1000;
const DAILY_LIMIT_PRICE = 100000;
const NUMBER_CHECK = /^[0-9]+$/;

class App {
  async play() {
    const buyLotto = new BuyLotto(LOTTO_PRICE, DAILY_LIMIT_PRICE, NUMBER_CHECK);

    const purchaseAmount = await buyLotto.inputPurchaseAmount();
    buyLotto.validateInputPurchaseAmount(purchaseAmount);
    buyLotto.printLottoNumbers(purchaseAmount);
  }
}

export default App;
