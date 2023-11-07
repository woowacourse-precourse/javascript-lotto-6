const getMatchingNumbersCounts = (lottos, winningNumbers) => {
  const matchCounts = lottos.map(
    lotto => lotto.getNumbers().filter(item => winningNumbers.includes(item)).length,
  );
  return matchCounts;
};

export default getMatchingNumbersCounts;
