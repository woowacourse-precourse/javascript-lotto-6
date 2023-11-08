import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from '../constants/errors.js';
import LOTTO_CONFIG from '../constants/lotto.js';
import AppError from '../errors/AppError.js';
import InputError from '../errors/InputError.js';
import LottoError from '../errors/LottoError.js';

const Validator = {
  isEmptyString(string) {
    return string === '';
  },

  validInputLottoType(numbers) {
    if (!numbers.every((number) => Number.isInteger(Number(number)))) {
      throw new LottoError(ERROR_MESSAGE.inputError.type);
    }
  },

  validInputLottoLength(numbers) {
    if (numbers.length !== LOTTO_CONFIG.totalNumbers) {
      throw new LottoError(
        ERROR_MESSAGE.lottoError.maxCount,
        LOTTO_CONFIG.totalNumbers,
      );
    }
  },

  validInputLottoScope(numbers) {
    if (
      !numbers.every(
        (number) =>
          number >= LOTTO_CONFIG.minNumber && number <= LOTTO_CONFIG.maxNumber,
      )
    ) {
      throw new LottoError(
        ERROR_MESSAGE.lottoError.scope,
        LOTTO_CONFIG.minNumber,
        LOTTO_CONFIG.maxNumber,
      );
    }
  },

  findDuplicateNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new LottoError(ERROR_MESSAGE.lottoError.bonusDuplicate);
    }
  },

  validBonusNumberType(number) {
    if (Number.isNaN(number)) {
      throw new LottoError(ERROR_MESSAGE.inputError.type);
    }
  },

  validBonusNumberScope(number) {
    if (number > LOTTO_CONFIG.maxNumber || number < LOTTO_CONFIG.minNumber) {
      throw new LottoError(ERROR_MESSAGE.lottoError.scope);
    }
  },

  validInputBonusEmpty(money) {
    if (this.isEmptyString(money)) {
      throw new InputError(ERROR_MESSAGE.inputError.emptyString);
    }
  },

  validInputNumbersEmpty(numbers) {
    if (this.isEmptyString(numbers)) {
      throw new LottoError(ERROR_MESSAGE.lottoError.emptyString);
    }
  },

  validInputNumbersDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO_CONFIG.totalNumbers) {
      throw new LottoError(ERROR_MESSAGE.lottoError.duplicate);
    }
  },

  validInputMoneyAmount(money) {
    if (Number(money) < LOTTO_CONFIG.price) {
      throw new InputError(ERROR_MESSAGE.inputError.amount);
    }
  },

  validInputMoneyRemainder(money) {
    if (Number(money) % LOTTO_CONFIG.price !== 0) {
      throw new InputError(ERROR_MESSAGE.inputError.remainder);
    }
  },

  validInputMoneyEmpty(money) {
    if (this.isEmptyString(money)) {
      throw new InputError(ERROR_MESSAGE.inputError.emptyString);
    }
  },

  validInputMoneyType(money) {
    if (Number.isNaN(Number(money))) {
      throw new InputError(ERROR_MESSAGE.inputError.type);
    }
  },
};

export default Validator;
