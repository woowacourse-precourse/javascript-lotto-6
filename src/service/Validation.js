import { MESSAGE, NUMBER_OPTIONS } from './Constants.js';

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
    const beginNumber = NUMBER_OPTIONS.beginRange;
    const endNumber = NUMBER_OPTIONS.endRange;

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
