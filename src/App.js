import Input from './view/Input.js';
import InputError from './domain/InputError.js';
import Output from './view/Output.js';
import LottoMachine from './domain/LottoMachine.js';

class App {
  async play() {
    const purchasePrice = await Input.getLottoPurchasePrice();
    await this.checkPriceInputError(purchasePrice);
  }

  async checkPriceInputError(purchasePrice) {
    await InputError.checkPriceInputError(purchasePrice);
    await this.printLottoCount(purchasePrice);
  }

  async printLottoCount(purchasePrice) {
    const count = await LottoMachine.getLottoCount(purchasePrice);
    Output.printLottoCount(count);
    this.generateLotto(count);
  }

  generateLotto(count) {
    const lottoList = LottoMachine.generateLotto(count);
    Output.printLottoList(lottoList);
  }
}

export default App;
