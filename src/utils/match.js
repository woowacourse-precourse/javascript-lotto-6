function getMatchCount(numbers, winningNumbers) {
  return numbers.filter(number => winningNumbers.includes(number)).length;
}

function includeBonusNumber(numbers, bonusNumber) {
  return numbers.includes(bonusNumber);
}

export { getMatchCount, includeBonusNumber };
