import Input from './Input.js';
import Output from './Output.js';
import Util from './Util.js';

class App {
  constructor() {
    this.purchasedLotto = [];
  }

  async play() {
    const lottoBudget = await Input.getLottoBudget();
    const purchaseCount = Util.calculatePurchaseCount(lottoBudget);
    Output.printPurchase(purchaseCount);
    for (let i = 0; i < purchaseCount; i += 1) {
      this.purchasedLotto.push(Util.createLottoNumber());
    }
    Output.printPurchasedLottoList(this.purchasedLotto);
  }
}

export default App;
