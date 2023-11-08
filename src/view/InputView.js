import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import Validator from '../domain/Validator.js';

const InputView = {
  readPurchaseAmount: async () => {
    while (true) {
      try {
        const purchaseAmount = await Console.readLineAsync(MESSAGE.read.purchaseAmount);
        Validator.validatePurchaseAmount(purchaseAmount);
        return purchaseAmount;
      } catch ({ message }) {
        Console.print(message);
      }
    }
  },

  readWinningNumbers: async () => {
    while (true) {
      try {
        const input = await Console.readLineAsync(MESSAGE.read.winningNumbers);
        const winningNumbers = input.split(',').map(item => Number(item.trim()));
        Validator.validateWinningNumbers(winningNumbers);
        return winningNumbers;
      } catch ({ message }) {
        Console.print(message);
      }
    }
  },

  readbonusNumber: async () => {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(MESSAGE.read.bonusNumber);
        Validator.validateBonusNumber(bonusNumber);
        return Number(bonusNumber);
      } catch ({ message }) {
        Console.print(message);
      }
    }
  },
};

export default InputView;
