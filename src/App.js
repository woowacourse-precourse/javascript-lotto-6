import { Console } from '@woowacourse/mission-utils';
import {
  BONUS_NUMBER_WEIGHT,
  LAST_DECIMAL_PLACE_TO_DISPLAY,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
  LOTTO_PRICE,
  MATCHING_WINNING_COUNTS_FOR_USING_BONUS_NUMBER,
  MIN_MATCHING_COUNTS_FOR_PRIZE,
  PERCENT_CONVERSION_NUMBER,
  WINNING_NUMBER_WEIGHT,
  WINNING_PRIZE_BY_COUNT,
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
    this.getGameResult();
    const totalPrize = this.getTotalPrize();
    const rateOfReturn = this.getRateOfReturn(purchaseAmount, totalPrize);
  }

  async getPurchaseAmount() {
    this.purchaseAmountInput = await this.inputManager.enterPurchaseAmount();
    try {
      await validatePurchaseAmountInput(this.purchaseAmountInput);
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
      await validateWinnerNumbersInput(this.winningNumbersInput);
    } catch (e) {
      await this.outputManager.printInputErrorMessage(e.message);
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
      await this.outputManager.printInputErrorMessage(e.message);
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
      const winningCounts =
        matchingCountWithWinningNumbers ===
        MATCHING_WINNING_COUNTS_FOR_USING_BONUS_NUMBER
          ? matchingCountWithWinningNumbers * WINNING_NUMBER_WEIGHT +
            matchingCountWithBonusNumber * BONUS_NUMBER_WEIGHT
          : matchingCountWithWinningNumbers * WINNING_NUMBER_WEIGHT;

      if (winningCounts < MIN_MATCHING_COUNTS_FOR_PRIZE) return;
      this.gameResult[winningCounts] += 1;
    });
  }

  getTotalPrize() {
    let totalPrize = 0;
    Object.keys(this.gameResult).forEach((winningCount) => {
      totalPrize +=
        this.gameResult[winningCount] * WINNING_PRIZE_BY_COUNT[winningCount];
    });
    return totalPrize;
  }

  getRateOfReturn(purchaseAmount, totalPrize) {
    return ((totalPrize / purchaseAmount) * PERCENT_CONVERSION_NUMBER).toFixed(
      LAST_DECIMAL_PLACE_TO_DISPLAY
    );
  }
}

export default App;
