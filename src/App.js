import User from './User.js';
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

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
}

class App {
  issueLotto(theNumberOfLotto) {
    const lottos = [];

    let count = 0;
    while (count < theNumberOfLotto) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

      const lotto = new Lotto(lottoNumbers);
      lotto.sortLottoNumbers();
      
      lottos.push(lotto);
      count++;
    }
    
    return lottos;
  }

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
  }

  checkAllLottoResult(lottos, lottoWinningNumber, lottoBonusNumber) {
    lottos.forEach(lotto => {
      const comparedResult = this.compareToLottoNumbers(lotto, lottoWinningNumber, lottoBonusNumber);
      
      Object.entries(allLottoResult).forEach(([key, value]) => {
        const rankingDetailStr = JSON.stringify(value.rankingDetail);
        const comparedResultStr = JSON.stringify(comparedResult);

        if (rankingDetailStr === comparedResultStr) {
          value.count++;
        }
      });
    });

    return allLottoResult;
  }

  calculateProfitRate(allLottoResult, theNumberOfLotto) {
    let profit = 0;
    const theAmountOfLotto = theNumberOfLotto*1000;

    Object.values(allLottoResult).forEach(value => {
      const {rankingDetail, reward, count} = value;
      profit += reward*count;
    });

    profit -= theAmountOfLotto;

    const profitRate = profit / theAmountOfLotto * 100;
  
    return profitRate;
  }

  async play() {
    const user = new User();
    const theNumberOfLotto = await user.inputLottoPurchaseAmount();
    const lottos = this.issueLotto(theNumberOfLotto);
    user.printLottoNumbers(lottos);
    const lottoWinningNumber = await user.inputLottoWinningNumber();
    const lottoBonusNumber = await user.inputLottoBonusNumber();
    const lottoResult = this.checkAllLottoResult(lottos, lottoWinningNumber, lottoBonusNumber);
    user.printAllLottoResult(lottoResult);
    const profitRate = this.calculateProfitRate(lottoResult, theNumberOfLotto);
    user.printLottoProfitRate(profitRate);
  }
}

export default App;
