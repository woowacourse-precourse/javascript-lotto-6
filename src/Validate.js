import ERROR from './constants/Error';

const Validate = {
  checkPurchaseAmount(price) {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(price)) {
      throw new Error(ERROR.purchaseIsNumber);
    } else if (price < 1000) {
      throw new Error(ERROR.purchaseMinNumber);
    } else if (price % 1000) {
      throw new Error(ERROR.purchaseThousands);
    }
  },
  checkDuplicateNumber(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(ERROR.lottoIsNotDuplicate);
    }
  },
  checkNumberRange(number) {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(number)) {
      throw new Error(ERROR.lottoIsNumber);
    } else if (number < 1 || number > 45) {
      throw new Error(ERROR.lottoRange);
    }
  },
  checkNumberType(number) {
    if (typeof number !== 'number') {
      throw new Error(ERROR.lottoIsNumberType);
    }
  },
  checkIncludeComma(numbers) {
    if (!numbers.includes(',')) {
      throw new Error(ERROR.lottoContainComma);
    }
  },
};
export default Validate;
