import CustomError from '../../errors/CustomError';
import ERROR from '../constants/error';
import NUMBER from '../constants/number';

function checkNumberInRange(number, min, max, error) {
  if (number > max || number < min) {
    throw new CustomError(error);
  }
}

const LottoNumbersValidator = {
  range: numbers => {
    numbers.forEach(item =>
      checkNumberInRange(
        item,
        NUMBER.game.lotto.minNumber,
        NUMBER.game.lotto.maxNumber,
        ERROR.lottoNumber.notInRange,
      ),
    );
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
    checkNumberInRange(
      number,
      NUMBER.game.bonus.minNumber,
      NUMBER.game.bonus.maxNumber,
      ERROR.bonusNumber.notInRange,
    );
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
