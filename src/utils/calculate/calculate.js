const filterLottoNumbers = (winningNumbers, lottoNumbers) => {
  const filteredNumber = lottoNumbers.filter(number => {
    return winningNumbers.includes(number);
  });

  return filteredNumber;
};
