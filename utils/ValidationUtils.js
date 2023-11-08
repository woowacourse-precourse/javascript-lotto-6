const ValidationUtils = {
  checkCanDevideByThousand(number) {
    return number % 1000 === 0;
  },

  checkIsNumber(number) {
    const check = /^[0-9]+$/;
    return check.test(number);
  },
  checkIncludedZero(numbers) {
    return numbers.includes(0);
  },
  checkIsDuplicated(numbers) {
    const checkedNumbers = new Set(numbers);
    return checkedNumbers.size !== numbers.length;
  },
  checkIsInRange(number, max, min) {
    return number >= min && number <= max;
  },
};

export default ValidationUtils;
