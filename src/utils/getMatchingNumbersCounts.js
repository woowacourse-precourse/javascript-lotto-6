const getMatchingNumbersCounts = (lottos, winningNumbers) =>
  lottos.map(lotto => lotto.getNumbers().filter(item => winningNumbers.includes(item)).length);

export default getMatchingNumbersCounts;
