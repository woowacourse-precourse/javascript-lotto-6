import User from './User.js';
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

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

    lotto.forEach(number => {
      if (lottoWinningNumber.includes(number)) {
        comparedResult.theNumberOfMatches++;
      }
    });

    if (lotto.myNumbers.includes(lottoBonusNumber)) {
      comparedResult.haveBonusNumber = true;
    }
    
    return comparedResult;
  }

  async play() {
    const user = new User();
    const theNumberOfLotto = await user.inputLottoPurchaseAmount();
    const lottos = this.issueLotto(theNumberOfLotto);
    user.printLottoNumbers(lottos);
    const lottoWinningNumber = await user.inputLottoWinningNumber();
    const lottoBonusNumber = await user.inputLottoBonusNumber();
    this.checkLottoResult(lottos, lottoWinningNumber, lottoBonusNumber);''
  }
}

export default App;
