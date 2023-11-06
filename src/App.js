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
      const sortedLotto = lotto.sortLottoNumbers();

      lottos.push(sortedLotto);
      
      count++;
    }
    
    return lottos;
  }

  async play() {
    const user = new User();
    const theNumberOfLotto = await user.inputLottoPurchaseAmount();
    const lottos = this.issueLotto(theNumberOfLotto);
    user.printLottoNumbers(lottos);
    const lottoWinningNumber = await user.inputLottoWinningNumber();
    const lottoBonusNumber = await user.inputLottoBonusNumber();
  }
}

export default App;
