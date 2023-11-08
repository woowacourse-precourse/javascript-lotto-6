import { NUMBER } from './constants';

const isInRangeNunmber = (numberString) => {
  const isNumber = /^[0-9]+$/.test(numberString);
  const number = Number(numberString);
  const isInRange = number >= NUMBER.start && number <= NUMBER.end;
  const isValid = isNumber && isInRange;

  return isValid;
};

const CheckList = {
  cost: [
    {
      check: (costString) => {
        const isNumber = /^[0-9]+$/.test(costString);
        return isNumber;
      },
      errorMessage: '[ERROR] 구입 금액은 숫자로 입력해야 합니다.',
    },
    {
      check: (costString) => {
        const isDividedUp = Number(costString) % NUMBER.divisor === 0;
        return isDividedUp;
      },
      errorMessage: `[ERROR] 구입 금액은 ${NUMBER.divisor}단위로 입력해야 합니다.`,
    },
  ],
  prizeNumber: [
    {
      check: (prizeString) => {
        const prizeNumbers = prizeString.split(',');
        return prizeNumbers.length === NUMBER.lottoNumberLength;
      },
      errorMessage: '[ERROR] 당첨 번호는 6개입니다.',
    },
    {
      check: (prizeString) => {
        const prizeNumbers = prizeString.split(',');
        const set = new Set(prizeNumbers);

        return prizeNumbers.length === set.size;
      },
      errorMessage: '[ERROR] 당첨 번호에 중복되는 숫자가 있습니다.',
    },
    {
      check: (prizeString) => {
        const prizeNumbers = prizeString.split(',');
        const isValidRange = prizeNumbers.every((elem) => isInRangeNunmber(elem));

        return isValidRange;
      },
      errorMessage: '[ERROR] 숫자 범위는 1~45사이입니다.',
    },
  ],
  bonusNumber: [
    {
      check: isInRangeNunmber,
      errorMessage: '[ERROR] 숫자 범위는 1~45사이입니다.',
    },
    {
      check: (string, array) => {
        const number = Number(string);
        const isValid = !array.includes(number);

        return isValid;
      },
      errorMessage: '[ERROR] 당첨 번호에 이미 존재하는 번호입니다.',
    },
  ],
};

export default CheckList;
