import { BonusNumber } from './validators/WinningNumbers/BonusNumber.js';
import { CommonUserInput } from './validators/CommonUserInput/CommonUserInput.js';
import { IntegerInput } from './validators/CommonUserInput/IntegerInput.js';
import { Lotto } from './validators/Lotto.js';
import { Money } from './validators/Money.js';
import { WinningNumbers } from './validators/WinningNumbers/WinningNumbers.js';

export const Validator = {
  CommonUserInput,
  IntegerInput,
  Money,
  Lotto,
  WinningNumbers,
  BonusNumber,
};
