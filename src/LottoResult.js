import { 
  LOTTO_PRICE, 
  RANKING_REWARD, 
  RANKING_THE_NUMBER_OF_MATCHES,
  RANKING_HAVE_BONUS_NUMBER
} from "./constant/constants.js";

const allLottoResult = {
  Ranking5: {
    rankingDetail: {
      theNumberOfMatches: RANKING_THE_NUMBER_OF_MATCHES.ranking5,
      haveBonusNumber: RANKING_HAVE_BONUS_NUMBER.ranking5
    },
    reward: RANKING_REWARD.ranking5,
    count: 0
  },
  Ranking4: {
    rankingDetail: {
      theNumberOfMatches: RANKING_THE_NUMBER_OF_MATCHES.ranking4,
      haveBonusNumber: RANKING_HAVE_BONUS_NUMBER.ranking4
    },
    reward: RANKING_REWARD.ranking4,
    count: 0
  },
  Ranking3: {
    rankingDetail: {
      theNumberOfMatches: RANKING_THE_NUMBER_OF_MATCHES.ranking3,
      haveBonusNumber: RANKING_HAVE_BONUS_NUMBER.ranking3
    },
    reward: RANKING_REWARD.ranking3,
    count: 0
  },
  Ranking2: {
    rankingDetail: {
      theNumberOfMatches: RANKING_THE_NUMBER_OF_MATCHES.ranking2,
      haveBonusNumber: RANKING_HAVE_BONUS_NUMBER.ranking2
    },
    reward: RANKING_REWARD.ranking2,
    count: 0
  },
  Ranking1: {
    rankingDetail: {
      theNumberOfMatches: RANKING_THE_NUMBER_OF_MATCHES.ranking1,
      haveBonusNumber: RANKING_HAVE_BONUS_NUMBER.ranking1
    },
    reward: RANKING_REWARD.ranking1,
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
    const theAmountOfLotto = theNumberOfLotto * LOTTO_PRICE;

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
