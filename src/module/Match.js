const matchLotto = (purchasedLottoArray, winningNumbers, bonus) => {
  const matchCount = {
    threeMatches: 0,
    foutMatches: 0,
    fiveMatches: 0,
    fiveBonusMatches: 0,
    sixMatches: 0,
  };

  purchasedLottoArray.forEach(lottoNumbers => {
    const intersection = lottoNumbers.filter(number =>
      winningNumbers.includes(number),
    );
    const matchingCount = intersection.length;

    if (matchingCount === 3) {
      matchCount.threeMatches += 1;
    } else if (matchingCount === 4) {
      matchCount.fourMatches += 1;
    } else if (matchingCount === 5 && lottoNumbers.includes(bonus)) {
      matchCount.fiveBonusMatches += 1;
    } else if (matchingCount === 5) {
      matchCount.fiveMatches += 1;
    } else if (matchingCount === 6) {
      matchCount.sixMatches += 1;
    }
  });

  return matchCount;
};

export default matchLotto;
