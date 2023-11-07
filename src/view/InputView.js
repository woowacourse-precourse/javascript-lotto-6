import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import Validator from '../utils/Validator.js';

const InputView = {
  readPurchaseAmount: async () => {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.read.purchaseAmount);

    Validator.validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  },

  readWinningNumbers: async () => {
    const input = await Console.readLineAsync(MESSAGE.read.winningNumbers);
    const winningNumbers = input.split(',').map(item => item.trim());

    Validator.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  },

  readbonusNumber: async () => {
    const bonusNumber = await Console.readLineAsync(MESSAGE.read.bonusNumber);

    Validator.validateBonusNumber(bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
