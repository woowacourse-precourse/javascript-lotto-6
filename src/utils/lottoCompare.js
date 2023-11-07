const lottoCompare = (lotto, winningNumbers, bonusNumber, rank) => {
  let rankFlag = 0;
  lotto.forEach((number) => {
    if (winningNumbers.includes(number)) rankFlag += 1;
  });
  // 꽝
  if (rankFlag < 3) return;
  // 2등 체크, 기록
  if (rankFlag === 5 && lotto.includes(bonusNumber)) {
    rankFlag += 0.5;
    rank.set(rankFlag, rank.get(rankFlag) + 1);
    return;
  }
  // 2등 제외한 등수 기록
  rank.set(rankFlag, rank.get(rankFlag) + 1);
};

export default lottoCompare;
