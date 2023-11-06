export const validateBuyPrice = {
  isDivideThousand(price) {
    return price % 1000 !== 0;
  },
  isBiggerThanThousand(price) {
    return price < 1000;
  },
  isNumber(price) {
    return Number.isNaN(price);
  },
};

export const validateLotto = {
  isSixSize(numbers) {
    return numbers.length !== 6;
  },
  isOneToFourtyFive(numbers) {
    return numbers.some((element) => element < 1 && element > 45);
  },
  isNotDuplicate(numbers) {
    return numbers.some(
      (element) => numbers.indexOf(element) !== numbers.lastIndexOf(element)
    );
  },
  isNumber(numbers) {
    return numbers.some((element) => Number.isNaN(element));
  },
};
