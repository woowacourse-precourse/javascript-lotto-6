import { Console } from '@woowacourse/mission-utils';
import validatePurchaseAmount from '../validators/validatePurchaseAmount.js';
import validateLotteryNumbers from '../validators/validateLotteryNumbers.js';
import validateBonusNumber from '../validators/validateBonusNumber.js';
import INPUT_QUERY from '../constants/InputQuery.js';

class InputView {
  #reader;

  constructor(reader = Console.readLineAsync) {
    this.#reader = reader;
  }

  async readPurchaseAmount() {
    const purchaseAmountInput = await this.#reader(INPUT_QUERY.purchaseAmount);
    const purchaseAmount = Number(purchaseAmountInput);
    validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }

  async readLotteryNumbers() {
    const lotteryNumbersInput = await this.#reader(INPUT_QUERY.lottoNumbers);
    const lotteryNumbers = lotteryNumbersInput
      .split(',')
      .map((num) => Number(num));
    validateLotteryNumbers(lotteryNumbers);

    return lotteryNumbers;
  }

  async readBonusNumber(lotteryNumbers) {
    const bonusNumberInput = await this.#reader(INPUT_QUERY.bonusNumber);
    const bonusNumber = Number(bonusNumberInput);
    validateBonusNumber(bonusNumber, lotteryNumbers);

    return bonusNumber;
  }
}

export default InputView;
