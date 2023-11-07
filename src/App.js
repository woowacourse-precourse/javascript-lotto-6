import { Console } from '@woowacourse/mission-utils';
import {
  BONUS_NUMBER_WEIGHT,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
  LOTTO_PRICE,
  MATCHING_WINNING_COUNTS_FOR_USING_BONUS_NUMBER,
  MIN_MATCHING_COUNTS_FOR_PRIZE,
  WINNING_NUMBER_WEIGHT,
} from './Constants.js';
import Lotto from './Lotto.js';
import InputManager from './UI/InputManager.js';
import OutputManager from './UI/OutputManager.js';
import { generateRandomNumbers } from './Utils.js';
import {
  validateBonusNumberInput,
  validatePurchaseAmountInput,
  validateWinnerNumbersInput,
} from './Validation.js';

class App {
  constructor() {
    this.inputManager = new InputManager();
    this.outputManager = new OutputManager();
    this.purchaseAmountInput = '';
    this.winningNumbersInput = '';
    this.bonusNumberInput = '';
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.gameResult = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const numberOfLottos = this.getNumberOfLottos(purchaseAmount);
    this.createLottos(numberOfLottos);
    this.outputManager.printPurchasedLottosInfo(this.lottos);
    this.winningNumbers = await this.getWinningNumbers();
    this.bonusNumber = await this.getBonusNumber();
    this.calculateGameResult();
    Console.print(this.gameResult);
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

  async getWinningNumbers() {
    this.winningNumbersInput =
      await this.inputManager.enterWinningNumbersInput();
    try {
      await validateWinnerNumbersInput(this.winningNumbersInput);
    } catch (e) {
      await this.outputManager.printWinningNumbersInputErrorMessage(e.message);
      await this.getWinningNumbers();
    }
    return this.winningNumbersInput.split(',').map((el) => Number(el));
  }

  async getBonusNumber() {
    this.bonusNumberInput = await this.inputManager.enterBonusNumberInput();
    try {
      await validateBonusNumberInput({
        bonusNumberInput: this.bonusNumberInput,
        winningNumbers: this.winningNumbers,
      });
    } catch (e) {
      await this.outputManager.printBonusNumberInputErrorMessage(e.message);
      await this.getBonusNumber();
    }
    return Number(this.bonusNumberInput);
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

  getGameResult() {
    this.lottos.forEach((lotto) => {
      const { matchingCountWithWinningNumbers, matchingCountWithBonusNumber } =
        lotto.getMatchingResultWithWinningNumbers(this.winningNumbers);
      const winningWeight =
        matchingCountWithWinningNumbers ===
        MATCHING_WINNING_COUNTS_FOR_USING_BONUS_NUMBER
          ? matchingCountWithWinningNumbers * WINNING_NUMBER_WEIGHT +
            matchingCountWithBonusNumber * BONUS_NUMBER_WEIGHT
          : matchingCountWithWinningNumbers * WINNING_NUMBER_WEIGHT;

      if (winningWeight < MIN_MATCHING_COUNTS_FOR_PRIZE) return;
      this.gameResult[winningWeight] += 1;
    });
  }
}

export default App;
