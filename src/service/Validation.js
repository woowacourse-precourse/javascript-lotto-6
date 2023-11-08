const STANDARD = {
  numberRangeBegin: 1,
  numberRangeEnd: 45,
  winningNumbersLength: 6,
  bonusNumberLength: 1,
  purchaseUnit: 1000,
};

const MESSAGE = {
  prefix: '[ERROR]',
  invalidType: '숫자만 입력할 수 있습니다.',
  duplicatedNumber: '중복된 숫자는 입력할 수 없습니다.',
  duplicatedWinning: '당첨 번호와 중복되는 숫자는 입력할 수 없습니다.',
  invalidRange: (begin, end) =>
    `${begin}이상 ${end}이하의 숫자만 입력할 수 있습니다.`,
  invalidLength: (length) => `로또 번호는 ${length}개여야 합니다.`,
  invalidBonusLength: (length) => `보너스 번호는 ${length}개여야 합니다.`,
  invalidPurchaseUnit: (unit) =>
    `로또 구입 금액은 ${unit}원 단위로 입력해야 합니다.`,
};

const Validation = {
  isNumber: (number) => {
    if (Number.isNaN(number)) {
      throw new Error(`${MESSAGE.prefix} ${MESSAGE.invalidType}`);
    }
  },

  isNonDuplicatedNumber: (numbers) => {
    const nonDuplicatedNumbers = new Set(numbers);
    if (nonDuplicatedNumbers.size !== numbers.length) {
      throw new Error(`${MESSAGE.prefix} ${MESSAGE.duplicatedNumber}`);
    }
  },

  isNonDuplicatedBonusNumber: (bonusNumber, winningNumbers) => {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(`${MESSAGE.prefix} ${MESSAGE.duplicatedWinning}`);
    }
  },

  isNumberInRange: (number) => {
    const beginNumber = STANDARD.numberRangeBegin;
    const endNumber = STANDARD.numberRangeEnd;

    if (number < beginNumber || number > endNumber) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidRange(beginNumber, endNumber)}`,
      );
    }
  },

  isValidWinningNumbersLength: (numbers) => {
    const numbersLength = STANDARD.winningNumbersLength;

    if (numbers.length !== numbersLength) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidLength(numbersLength)}`,
      );
    }
  },

  isValidBonusNumberLength: (number) => {
    const { bonusLength } = STANDARD;
    const splitedNumber = number.split(',');

    if (splitedNumber.length !== bonusLength) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidBonusLength(bonusLength)}`,
      );
    }
  },

  isDividedIntoUnitPrice: (cost) => {
    const priceUnit = STANDARD.purchaseUnit;

    if (cost % priceUnit !== 0 || cost <= 0) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidPurchaseUnit(priceUnit)}`,
      );
    }
  },
};

export default Validation;
