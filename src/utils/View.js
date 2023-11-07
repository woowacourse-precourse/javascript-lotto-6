import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';
import validation from './validation.js';

const view = {
  async readPurchaseAmount() {
    const userInput = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.PURCHASE_AMOUNT,
    );

    validation.isValidInputPurchaseAmount(userInput);

    return userInput;
  },

  async readWinningNumbers() {},

  async readBonusNumber() {},
};

export default view;
