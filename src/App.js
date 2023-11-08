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
import { Validators } from './Service/Validators.js';
import LottoGameResultCalculator from './Components/LottoGameResultCalculator.js';

class App {
  constructor() {
    this.inputManager = new InputManager();
    this.outputManager = new OutputManager();
    this.lottoGameResultCalculator = new LottoGameResultCalculator();
    this.purchaseAmountInput = '';
    this.winningNumbersInput = '';
    this.bonusNumberInput = '';
    this.lottos = [];
    this.winningNumbers = [];
    this.purchaseAmount = 0;
    this.bonusNumber = 0;
  }

  async play() {
    await this.setConditionForGame();
    const { matchingResults, rateOfReturn } =
      this.lottoGameResultCalculator.getGameResult({
        lottos: [...this.lottos],
        winningNumbers: this.winningNumbers,
        bonusNumber: this.bonusNumber,
        purchaseAmount: this.purchaseAmount,
      });
    this.outputManager.printGameResult({
      matchingResults,
      rateOfReturn,
    });
  }

  async setConditionForGame() {
    this.purchaseAmount = await this.getPurchaseAmount();
    const numberOfLottos = this.getNumberOfLottos();
    this.createLottos(numberOfLottos);
    this.outputManager.printPurchasedLottosInfo(this.lottos);
    this.winningNumbers = await this.getWinningNumbers();
    this.bonusNumber = await this.getBonusNumber();
  }

  async getPurchaseAmount() {
    this.purchaseAmountInput = await this.inputManager.enterPurchaseAmount();
    try {
      Validators.purchaseAmountInputValidator.validatePurChaseAmountInput(
        this.purchaseAmountInput
      );
    } catch (e) {
      await this.outputManager.printInputErrorMessage(e.message);
      await this.getPurchaseAmount();
    }
    return Number(this.purchaseAmountInput);
  }

  async getWinningNumbers() {
    this.winningNumbersInput =
      await this.inputManager.enterWinningNumbersInput();
    try {
      Validators.winningNumbersInputValidator.validateWinningNumbersInput(
        this.winningNumbersInput
      );
    } catch (e) {
      await this.outputManager.printInputErrorMessage(e.message);
      await this.getWinningNumbers();
    }
    return this.winningNumbersInput.split(',').map((el) => Number(el));
  }

  async getBonusNumber() {
    this.bonusNumberInput = await this.inputManager.enterBonusNumberInput();
    try {
      Validators.bonusNumberInputValidator.validateBonusNumberInput({
        bonusNumberInput: this.bonusNumberInput,
        winningNumbers: this.winningNumbers,
      });
    } catch (e) {
      await this.outputManager.printInputErrorMessage(e.message);
      await this.getBonusNumber();
    }
    return Number(this.bonusNumberInput);
  }

  getNumberOfLottos() {
    return this.purchaseAmount / LOTTO_PRICE;
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
