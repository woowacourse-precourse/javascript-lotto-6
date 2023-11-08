const getMatchingNumbersCounts = (lottos, winningNumbers) =>
  lottos.map(lotto => lotto.filter(item => winningNumbers.includes(item)).length);

export default getMatchingNumbersCounts;
