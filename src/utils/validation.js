export const validateNumber = {
  isNotDivideThousand(number) {
    return number % 1000 !== 0;
  },
  isSmallerThanThousand(number) {
    return number < 1000;
  },
  isNotNumber(number) {
    return Number.isNaN(number);
  },
  isNotOneToFourtyFive(number) {
    return number < 1 || number > 45;
  },
};

export const validateArray = {
  isNotSixSize(numbers) {
    return numbers.length !== 6;
  },
  isNotOneToFourtyFive(numbers) {
    return numbers.some((element) => element < 1 || element > 45);
  },
  isDuplicate(numbers) {
    return numbers.some(
      (element) => numbers.indexOf(element) !== numbers.lastIndexOf(element)
    );
  },
  isNotNumber(numbers) {
    return numbers.some((element) => Number.isNaN(element));
  },
};
