import { BONUS_BALL_FORM, ERROR_MESSAGE, LOTTO_FORM } from '../constant';
import { getErrorMessage, getNumberErrorMessage } from './MessageFactory';

const validateNumbersRange = (...args) => {
  const { numbers, rangeMin, rangeMax } = args;
  numbers.forEach((v) => {
    if (v < rangeMin || v > rangeMax)
      throw new Error(getNumberErrorMessage(ERROR_MESSAGE.range));
  });
};

const validateNumbersLength = (...args) => {
  const { numbers, length } = args;
  const error =
    length === 1 ? ERROR_MESSAGE.oneNumber : ERROR_MESSAGE.sixNumbers;
  if (numbers.length !== length) throw new Error(getErrorMessage(error));
};

const hasNoRepeatNumber = (numbers) => {
  if (Set(numbers).size !== numbers.length)
    throw new Error(getNumberErrorMessage(ERROR_MESSAGE.duplicateNumber));
};

const validateLottoNumbers = (numbers) => {
  const args = {
    numbers: number,
    rangeMin: LOTTO_FORM.range.min,
    rangeMax: LOTTO_FORM.range.max,
    length: LOTTO_FORM.length,
  };
  validateNumbersLength(...args);
  validateNumbersRange(...args);
  hasNoRepeatNumber(...args);
};

const hasNoReset = (string) => {
  if (!string.includes(','))
    throw new Error(getErrorMessage(ERROR_MESSAGE.noReset));
};

const validatePayment = (payment, unit) => {
  if (payment < 1000 || !(payment % unit))
    throw new Error(getErrorMessage(ERROR_MESSAGE.payment));
};
const hasNoBonusBall = (...args) => {
  const { numbers, bonusBall } = args;
  if (numbers.contains(bonusBall)) throw new Error();
};

const validateBonusBall = (numbers, bonusBall) => {
  const args = {
    numbers: numbers,
    bonusBall: bonusBall,
    rangeMax: BONUS_BALL_FORM.range.max,
    rangeMin: BONUS_BALL_FORM.range.min,
    length: BONUS_BALL_FORM.length,
  };
  validateNumbersRange(...args);
  validateNumbersLength(...args);
  hasNoBonusBall(...args);
};
export { hasNoReset, validatePayment, validateBonusBall, validateLottoNumbers };
