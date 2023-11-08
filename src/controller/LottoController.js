import LottoModel from '../model/LottoModel.js';
import validation from '../utils/validation.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class LottoController {
  #LottoModel;

  constructor() {
    this.count = 0;
    this.lottoNumbersList = [];
  }

  async getPurchaseAmount() {
    const input = await inputView.purchaseAmount();
    validation.validatePurchaseAmount(input);
    const count = input / 1000;
    this.count = count;
    this.#LottoModel = new LottoModel(count);
  }

  printLottoNumbers() {
    outputView.printPurchaseSummary(this.count);
    const lottoNumbersList = this.#LottoModel.generateLottoNumbers();
    lottoNumbersList.map((list) => outputView.printLottoNumbersList(list));
    this.lottoNumbersList = lottoNumbersList;
  }
}

export default LottoController;
