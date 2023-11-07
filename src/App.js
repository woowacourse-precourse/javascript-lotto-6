import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
  LOTTO_PRICE,
} from './Constants.js';
import Lotto from './Lotto.js';
import InputManager from './UI/InputManager.js';
import OutputManager from './UI/OutputManager.js';
import { generateRandomNumbers } from './Utils.js';
import { validatePurchaseAmountInput } from './Validation.js';

class App {
  constructor() {
    this.inputManager = new InputManager();
    this.outputManager = new OutputManager();
    this.lottos = [];
    this.purchaseAmountInput = '';
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const numberOfLottos = this.getNumberOfLottos(purchaseAmount);
    this.createLottos(numberOfLottos);
  }

  async getPurchaseAmount() {
    this.purchaseAmountInput = await this.inputManager.enterPurchaseAmount();
    try {
      await validatePurchaseAmountInput(this.purchaseAmountInput);
    } catch (e) {
      await this.outputManager.printPurchaseAmountInputErrorMessage(e.message);
      await this.getPurchaseAmount();
    }
    return Number(this.purchaseAmountInput);
  }

  getNumberOfLottos(purchaseAmount) {
    return purchaseAmount / LOTTO_PRICE;
  }

  createLottos(numberOfLottos) {
    for (let i = 0; i < numberOfLottos; i++) {
      const lottoNumbers = this.generateLottoNumbers();
      this.lottos.push(new Lotto(lottoNumbers));
    }
  }

  generateLottoNumbers() {
    const numbers = generateRandomNumbers(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_NUMBERS_LENGTH
    );
    numbers.sort((a, b) => a - b);
    return numbers;
  }
}

export default App;
