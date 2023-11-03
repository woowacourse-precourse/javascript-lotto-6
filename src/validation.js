function isValidAmount(amount) {
  return amount % 1000 === 0;
}

function isValidNumber(number) {
  return !isNaN(number) && number >= 1 && number <= 45;
}

function isValidWinningNumbers(numbers) {
  return numbers.length === 6 && numbers.every(isValidNumber);
}

function hasDuplicate(numbers) {
  return new Set(numbers).size !== numbers.length;
}

export { isValidAmount, isValidNumber, isValidWinningNumbers, hasDuplicate };
