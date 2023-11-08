import { LOTTO } from '../constants/constants';
import { LOTTO_NUMBER_MESSAGE } from '../constants/errorMessages';
import CustomError from '../errors/CustomError';

export const lottoNumbersValidator = (numbers) => {
  validateType(numbers);
  validateRange(numbers);
  validateLength(numbers);
  validateDuplicate(numbers);
};

export const lottoBonusNumberValidator = (bonusNumber, lottoNumbers) => {
  validateType([bonusNumber]);
  validateRange([bonusNumber]);
  validateDuplicate([bonusNumber, ...lottoNumbers]);
};

const validateType = (numbers) => {
  numbers.forEach((number) => {
    if (typeof number !== 'number' || Number.isNaN(number)) {
      throw new CustomError(LOTTO_NUMBER_MESSAGE.invalidNumber);
    }
  });
};

const validateLength = (numbers) => {
  if (numbers.length !== LOTTO.numberLength) {
    throw new CustomError(LOTTO_NUMBER_MESSAGE.invalidLength);
  }
};

const validateRange = (numbers) => {
  numbers.forEach((number) => {
    if (number < LOTTO.minNumber || number > LOTTO.maxNumber) {
      throw new CustomError(LOTTO_NUMBER_MESSAGE.invalidRange);
    }
  });
};

const validateDuplicate = (numbers) => {
  const numberSet = new Set(numbers);

  if (numbers.length !== numberSet.size) {
    throw new CustomError(LOTTO_NUMBER_MESSAGE.duplicateNumber);
  }
};
