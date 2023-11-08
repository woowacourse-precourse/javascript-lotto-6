import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';
import validation from './validation.js';
import CONSTANTS from '../constants/Constants.js';
import { arraySort } from './arrayUtils.js';

const view = {
  async readPurchaseLottos() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.PURCHASE_AMOUNT,
    );

    validation.isValidInputPurchaseAmount(purchaseAmount);

    return Number(purchaseAmount) / CONSTANTS.LOTTO_PRICE;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.WINNING_NUMBERS,
    );

    validation.isValidInputWinningNumbers(winningNumbers);

    return arraySort(winningNumbers.split(',').map(number => Number(number)));
  },

  async readBonusNumber(winningNumbers) {
    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.BONUS_NUMBER,
    );

    validation.isValidInputBonusNumber(bonusNumber);
    validation.bonusNumberIncludedWinningNumbers(bonusNumber, winningNumbers);

    return Number(bonusNumber);
  },

  printPurchaseLottoCount(lottoCount) {
    Console.print(`\n${lottoCount + MESSAGES.PURCHASE_COUNT}`);
  },
};

export default view;
