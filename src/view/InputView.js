import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../constants/Messages.js';
import checkEmptyString from '../utils/validators/index.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);

    checkEmptyString(purchaseAmount);

    return purchaseAmount;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(OUTPUT_MESSAGE.winningNumbers);

    checkEmptyString(winningNumbers);

    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(OUTPUT_MESSAGE.bonusNumber);

    checkEmptyString(bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
