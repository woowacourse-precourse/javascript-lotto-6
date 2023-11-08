import { MESSAGE, NUMBER_OPTIONS, PURCHASE_OPTIONS } from './Constants.js';

const Validation = {
  isNumber: (number) => {
    const convertNumber = Number(number);

    if (Number.isNaN(convertNumber)) {
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
    const beginNumber = NUMBER_OPTIONS.beginRange;
    const endNumber = NUMBER_OPTIONS.endRange;

    if (number < beginNumber || number > endNumber) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidRange(beginNumber, endNumber)}`,
      );
    }
  },

  isValidWinningNumbersLength: (numbers) => {
    const numbersLength = NUMBER_OPTIONS.winningLength;

    if (numbers.length !== numbersLength) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidLength(numbersLength)}`,
      );
    }
  },

  isValidBonusNumberLength: (number) => {
    const { bonusLength } = NUMBER_OPTIONS;
    const splitedNumber = number.split(',');

    if (splitedNumber.length !== bonusLength) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidBonusLength(bonusLength)}`,
      );
    }
  },

  isDividedIntoUnitPrice: (cost) => {
    const priceUnit = PURCHASE_OPTIONS.unitPrice;

    if (cost % priceUnit !== 0 || cost <= 0) {
      throw new Error(
        `${MESSAGE.prefix} ${MESSAGE.invalidPurchaseUnit(priceUnit)}`,
      );
    }
  },
};

export default Validation;
