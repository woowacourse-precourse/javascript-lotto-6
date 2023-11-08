import User from './User.js';
import Lotto from './Lotto.js';
import LottoResult from './LottoResult.js';
import { Random } from '@woowacourse/mission-utils';

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
  };

  async play() {
    const user = new User();
    const lottoResult = new LottoResult();

    const theNumberOfLotto = await user.inputLottoPurchaseAmount();
    const lottos = this.issueLotto(theNumberOfLotto);
    user.printLottoNumbers(lottos);

    const lottoWinningNumber = await user.inputLottoWinningNumber();
    const lottoBonusNumber = await user.inputLottoBonusNumber();

    const allLottoResult = lottoResult.checkAllLottoResult(lottos, lottoWinningNumber, lottoBonusNumber);
    user.printAllLottoResult(allLottoResult);

    const profitRate = lottoResult.calculateProfitRate(allLottoResult, theNumberOfLotto);
    user.printLottoProfitRate(profitRate);
  }
}

export default App;
