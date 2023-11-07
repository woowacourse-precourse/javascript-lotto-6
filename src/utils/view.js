import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';
import validation from './validation.js';

const view = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.PURCHASE_AMOUNT,
    );

    validation.isValidInputPurchaseAmount(purchaseAmount);

    return Number(purchaseAmount);
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.WINNING_NUMBERS,
    );

    validation.isValidInputWinningNumbers(winningNumbers);

    return winningNumbers
      .split(',')
      .map(number => Number(number))
      .sort((a, b) => a - b);
  },

  async readBonusNumber(winningNumbers) {
    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.BONUS_NUMBER,
    );

    validation.isValidInputBonusNumber(bonusNumber);
    validation.bonusNumberIncludedWinningNumbers(bonusNumber, winningNumbers);

    return Number(bonusNumber);
  },
};

export default view;
