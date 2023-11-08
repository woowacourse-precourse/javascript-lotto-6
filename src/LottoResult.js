const allLottoResult = {
  Ranking5: {
    rankingDetail: {
      theNumberOfMatches: 3,
      haveBonusNumber: false
    },
    reward: 5000,
    count: 0
  },
  Ranking4: {
    rankingDetail: {
      theNumberOfMatches: 4,
      haveBonusNumber: false
    },
    reward: 50000,
    count: 0
  },
  Ranking3: {
    rankingDetail: {
      theNumberOfMatches: 5,
      haveBonusNumber: false
    },
    reward: 1500000,
    count: 0
  },
  Ranking2: {
    rankingDetail: {
      theNumberOfMatches: 5,
      haveBonusNumber: true
    },
    reward: 30000000,
    count: 0
  },
  Ranking1: {
    rankingDetail: {
      theNumberOfMatches: 6,
      haveBonusNumber: false
    },
    reward: 2000000000,
    count: 0
  }
};

class LottoResult {
  compareToLottoNumbers(lotto, lottoWinningNumber, lottoBonusNumber) {
    const comparedResult = {
      theNumberOfMatches: 0,
      haveBonusNumber: false
    };

    lotto.myNumbers.forEach(number => {
      if (lottoWinningNumber.includes(number)) {
        comparedResult.theNumberOfMatches++;
      }
    });

    if (comparedResult.theNumberOfMatches === 5 && lotto.myNumbers.includes(lottoBonusNumber)) {
      comparedResult.haveBonusNumber = true;
    }

    return comparedResult;
  };

  updateLottoResult(lottoResult) {
    Object.entries(allLottoResult).forEach(([key, value]) => {
      const rankingDetailStr = JSON.stringify(value.rankingDetail);
      const lottoResultStr = JSON.stringify(lottoResult);

      if (rankingDetailStr === lottoResultStr) {
        value.count++;
      }
    });
  }

  checkAllLottoResult(lottos, lottoWinningNumber, lottoBonusNumber) {
    lottos.forEach(lotto => {
      const lottoResult = this.compareToLottoNumbers(lotto, lottoWinningNumber, lottoBonusNumber);
      this.updateLottoResult(lottoResult);
    });

    return allLottoResult;
  };

  calculateProfitRate(allLottoResult, theNumberOfLotto) {
    let profit = 0;
    const theAmountOfLotto = theNumberOfLotto * 1000;

    Object.values(allLottoResult).forEach(value => {
      const {rankingDetail, reward, count} = value;
      profit += reward * count;
    });

    profit -= theAmountOfLotto;

    const profitRate = profit / theAmountOfLotto * 100;
  
    return profitRate;
  };
}

export default LottoResult;
