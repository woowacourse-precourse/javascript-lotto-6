import InputManager from './UI/InputManager.js';
import OutputManager from './UI/OutputManager.js';
import { Validators } from './Service/Validators.js';
import LottoGameResultCalculator from './Components/LottoGameResultCalculator.js';
import LottoGenerator from './Components/LottoGenerator.js';

class App {
  constructor() {
    this.inputManager = new InputManager();
    this.outputManager = new OutputManager();
    this.lottoGameResultCalculator = new LottoGameResultCalculator();
    this.lottoGenerator = new LottoGenerator();
    this.purchaseAmountInput = '';
    this.winningNumbersInput = '';
    this.bonusNumberInput = '';
    this.lottos = [];
    this.winningNumbers = [];
    this.purchaseAmount = 0;
    this.bonusNumber = 0;
  }

  async play() {
    await this.setConditionForGamePlaying();
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

  async setConditionForGamePlaying() {
    this.purchaseAmount = await this.getPurchaseAmount();
    this.lottos = [...this.lottoGenerator.generateLottos(this.purchaseAmount)];
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
}

export default App;
