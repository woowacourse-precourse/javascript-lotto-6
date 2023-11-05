export function countMatchingNumbers(lottoNumbers, winningNumbers) {
  return lottoNumbers.filter((number) => winningNumbers.includes(number))
    .length;
}

export function hasBonusNumber(lottoNumbers, bonusNumber) {
  return lottoNumbers.includes(bonusNumber);
}
