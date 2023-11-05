import { lotto } from '../constants/constants';

// 6개인지 확인
const checkLength = lottoArray => {
  return lottoArray.length !== lotto.LENGTH;
};

const isNotValidNumber = number => {
  const isNotValid =
    number < lotto.MIN_RANGE || number > lotto.MAX_RANGE || Number.isNaN(number);
  return isNotValid;
};

// 1~45의 정수인지 확인
const checkLottoNumber = lottoArray => {
  for (const number of lottoArray) {
    if (isNotValidNumber(number)) {
      return true;
    }
  }
  return false;
};

// 중복 값 확인
const checkDuplicates = lottoArray => {
  return new Set(lottoArray).size !== lotto.LENGTH;
};

export { checkDuplicates, checkLength, checkLottoNumber };
