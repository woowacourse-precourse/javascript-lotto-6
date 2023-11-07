import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from '../../constants/constants.js';

const changeParseInt = numbersStringArray => {
  return numbersStringArray.map(number => {
    return parseInt(number, 10);
  });
};

const lottoPurchaseCount = inputPrice => {
  return Math.floor(parseInt(inputPrice, 10) / LOTTO_PRICE);
};

const randomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

const sortLottoNumbers = numbers => {
  const sortedNumbers = [...numbers].sort((firstNumber, nextNumber) => firstNumber - nextNumber);
  return sortedNumbers;
};

export { changeParseInt, lottoPurchaseCount, randomLottoNumbers, sortLottoNumbers };
