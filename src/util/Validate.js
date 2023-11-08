import constant from '../constants/constant.js';
import errorMessage from '../constants/errorMessage.js';

const Validate = {
  money(inputMoney) {
    this.notNull(inputMoney);
    this.onlyNumber(inputMoney);
    this.divisible(inputMoney);
  },

  winningNumbers(inputWinning) {
    this.notNull(inputWinning);
    this.notSpace(inputWinning);
    this.comma(inputWinning);
    this.sixNumbers(inputWinning);
    this.notNull(inputWinning);
    this.outOfRange(inputWinning);
    this.notDuplicate(inputWinning);
  },

  bonusNumber(inputBonus) {
    this.notNull(inputBonus);
    this.notNull(inputBonus);
    this.outOfRange(inputBonus);
  },

  notNull(inputValue) {
    if (!inputValue.length) {
      throw new Error(errorMessage.NOT_NULL);
    }
  },

  onlyNumber(inputValue) {
    const splitedValue = inputValue.split(',');
    const numberRegExp = /^[0-9]+$/;
    splitedValue.forEach((value) => {
      if (!numberRegExp.test(value)) {
        throw new Error(errorMessage.ONLY_NUMBER);
      }
    });
  },

  outOfRange(inputValue) {
    const splitedValue = inputValue.split(',');
    splitedValue.forEach((value) => {
      if (
        !(
          Number(value) >= constant.MINIMUM && Number(value) <= constant.MAXIMUM
        )
      ) {
        throw new Error(errorMessage.OUT_OF_RANGE);
      }
    });
  },

  divisible(inputValue) {
    const number = Number(inputValue);
    if (number === 0 || number % constant.THOUSAND !== 0) {
      throw new Error(errorMessage.DIVISIBLE);
    }
  },

  notSpace(inputValue) {
    const splitedValue = inputValue.split(',');
    splitedValue.forEach((value) => {
      if (value.includes(' ')) {
        throw new Error(errorMessage.NOT_SPACE);
      }
    });
  },

  comma(inputValue) {
    const splitedValue = inputValue.split(',');
    splitedValue.forEach((value) => {
      if (value.length === 0) {
        throw new Error(errorMessage.COMMA);
      }
    });
  },

  sixNumbers(inputValue) {
    const splitedValue = inputValue.split(',');
    if (splitedValue.length !== constant.COUNT) {
      throw new Error(errorMessage.SIX_NUMBERS);
    }
  },

  notDuplicate(inputValue) {
    const splitedValue = inputValue.split(',');
    if (new Set(splitedValue).size !== constant.COUNT) {
      throw new Error(errorMessage.NOT_DUPLICATE);
    }
  },

  notDuplicateBonus(winningNumbers, inputBonus) {
    if (winningNumbers.includes(Number(inputBonus))) {
      throw new Error(errorMessage.NOT_DUPLICATE_BONUS);
    }
  },
};

export default Validate;
