import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from '../../constants/constants.js';
import { ensureIsNumberString } from '../validation/validation.js';

const parseStringsToIntegers = numbersStringArray => {
  return numbersStringArray.map(numberString => {
    if (typeof numberString === 'string') {
      ensureIsNumberString(numberString);

      return parseInt(numberString, 10);
    }

    return numberString;
  });
};

const lottoPurchaseCount = inputPrice => {
  return Math.floor(parseInt(inputPrice, 10) / LOTTO_PRICE);
};

const randomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

const sortLottoNumbers = numbers => {
  return [...numbers].sort((firstNumber, nextNumber) => firstNumber - nextNumber);
};

export { parseStringsToIntegers, lottoPurchaseCount, randomLottoNumbers, sortLottoNumbers };
