import errorMessage from '../constants/errorMessage.js';

const Validate = {
  money(inputMoney) {
    this.notNull(inputMoney);
    this.onlyNumber(inputMoney);
    this.divisible(inputMoney);
  },

  notNull(inputValue) {
    if (!inputValue.length) {
      throw new Error(errorMessage.NOT_NULL);
    }
  },

  onlyNumber(inputValue) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(inputValue)) {
      throw new Error(errorMessage.ONLY_NUMBER);
    }
  },

  divisible(inputValue) {
    const number = Number(inputValue);
    if (number === 0 || number % 1000 !== 0) {
      throw new Error(errorMessage.MONEY.DIVISIBLE);
    }
  },
};

export default Validate;
