import CustomError from '../../errors/CustomError';
import ERROR from '../constants/error';
import NUMBER from '../constants/number';

function checkSingleLottoNumberRange(number) {
  if (
    number > NUMBER.game.lotto.maxNumber ||
    number < NUMBER.game.lotto.minNumber
  ) {
    throw new CustomError(ERROR.lottoNumber.notInRange);
  }
}

const LottoNumbersValidator = {
  range: numbers => {
    numbers.forEach(item => checkSingleLottoNumberRange(item));
  },
  length: numbers => {
    if (numbers.length !== NUMBER.game.lotto.length) {
      throw new CustomError(ERROR.lottoNumber.invalidLength);
    }
  },
  duplicates: numbers => {
    if (new Set(numbers).size !== numbers.length) {
      throw new CustomError(ERROR.lottoNumber.isDuplicated);
    }
  },
};

const BonusNumberValidator = {
  range: number => {
    if (
      number > NUMBER.game.bonus.maxNumber ||
      number < NUMBER.game.bonus.minNumber
    ) {
      throw new CustomError(ERROR.bonusNumber.notInRange);
    }
  },
  duplicatedWithWinningNumbers: (number, winningNumbers) => {
    if (winningNumbers.includes(number)) {
      throw new CustomError(ERROR.bonusNumber.isDuplicatedWithLottoNumbers);
    }
  },
};

const LottoValidator = {
  validateMoneyAmount(moneyAmount) {
    if (moneyAmount % NUMBER.game.money.unitAmount !== 0) {
      throw new CustomError(ERROR.moneyAmount.notDivisibleByUnitAmount);
    }
  },
  validateLottoNumbers(numbers) {
    LottoNumbersValidator.range(numbers);
    LottoNumbersValidator.length(numbers);
    LottoNumbersValidator.duplicates(numbers);
  },
  validateBonusNumber(bonus, winningNumbers) {
    BonusNumberValidator.range(bonus);
    BonusNumberValidator.duplicatedWithWinningNumbers(bonus, winningNumbers);
  },
};

export default LottoValidator;
