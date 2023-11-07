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
    this.purchaseAmount = 0;
    this.bonusNumber = 0;
  }

  async play() {
    this.purchaseAmount = await this.getPurchaseAmount();
    const numberOfLottos = this.getNumberOfLottos();
    this.createLottos(numberOfLottos);
    this.outputManager.printPurchasedLottosInfo(this.lottos);
    this.winningNumbers = await this.getWinningNumbers();
    this.bonusNumber = await this.getBonusNumber();
    const { matchingCounts, rateOfReturn } = this.getGameResult();
    this.outputManager.printGameResult({
      matchingCounts,
      rateOfReturn,
    });
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

  getGameResult() {
    const matchingCounts = this.getMatchingCounts();
    const totalPrize = this.getTotalPrize(matchingCounts);
    const rateOfReturn = this.getRateOfReturn(totalPrize);
    return { matchingCounts, totalPrize, rateOfReturn };
  }

  getMatchingCount(
    matchingCountWithWinningNumbers,
    matchingCountWithBonusNumber
  ) {
    return matchingCountWithWinningNumbers ===
      MATCHING_WINNING_COUNTS_FOR_USING_BONUS_NUMBER
      ? matchingCountWithWinningNumbers * WINNING_NUMBER_WEIGHT +
          matchingCountWithBonusNumber * BONUS_NUMBER_WEIGHT
      : matchingCountWithWinningNumbers * WINNING_NUMBER_WEIGHT;
  }

  getMatchingCounts() {
    const matchingCounts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    this.lottos.forEach((lotto) => {
      const { matchingCountWithWinningNumbers, matchingCountWithBonusNumber } =
        lotto.getMatchingResultWithWinningNumbers(this.winningNumbers);
      const matchingCount = this.getMatchingCount(
        matchingCountWithWinningNumbers,
        matchingCountWithBonusNumber
      );
      if (matchingCount < MIN_MATCHING_COUNTS_FOR_PRIZE) return;
      matchingCounts[matchingCount] += 1;
    });
    return { ...matchingCounts };
  }

  getTotalPrize(matchingCounts) {
    let totalPrize = 0;
    Object.keys(matchingCounts).forEach((matchingCount) => {
      totalPrize +=
        matchingCounts[matchingCount] * WINNING_PRIZE_BY_COUNT[matchingCount];
    });
    return totalPrize;
  }

  getRateOfReturn(totalPrize) {
    return (
      (totalPrize / this.purchaseAmount) *
      PERCENT_CONVERSION_NUMBER
    ).toFixed(LAST_DECIMAL_PLACE_TO_DISPLAY);
  }
}

export default App;
