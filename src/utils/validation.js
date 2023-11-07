export const validateNumber = {
  isDivideThousand(number) {
    return number % 1000 !== 0;
  },
  isBiggerThanThousand(number) {
    return number < 1000;
  },
  isNumber(number) {
    return Number.isNaN(number);
  },
  isOneToFourtyFive(number) {
    return number < 1 && number > 45;
  },
};

export const validateArray = {
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
