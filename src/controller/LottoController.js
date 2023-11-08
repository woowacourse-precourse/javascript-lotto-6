import LottoModel from '../model/LottoModel.js';
import Lotto from '../Lotto.js';
import validation from '../utils/validation.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class LottoController {
  #Lotto;

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

  async getWinningNumbers() {
    const input = await inputView.winningNumbers();
    validation.validateWinningNumbers(input);
    const numbers = input.split(',').map(Number);
    this.#Lotto = new Lotto(numbers);
  }
}

export default LottoController;
