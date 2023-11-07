const winningService = {
  // 당첨 번호 비교
  getMatchedCount(lotto, winningLotto) {
    const lottoNums = lotto.getLottoNum();
    const winningNums = winningLotto.getLottoNum();

    let count = 0;
    for (let i of winningNums) {
      if (lottoNums.includes(i)) {
        count++;
      }
    }
    return count;
  },

  // 보너스 번호 비교
  getBonusCount(lotto, bonusNum) {
    const lottoNums = lotto.getLottoNum();

    let bonus = 0;
    if (lottoNums.includes(bonusNum)) {
      bonus += 10;
    }
    return bonus;
  },
};

export default winningService;
