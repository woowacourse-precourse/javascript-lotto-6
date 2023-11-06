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
      lottos.push(lotto);
      
      count++;
    }
    
    return lottos;
  }

  async play() {
    const user = new User();
    const theNumberOfLotto = await user.inputLottoPurchaseAmount();
    this.issueLotto(theNumberOfLotto);
  }
}

export default App;
