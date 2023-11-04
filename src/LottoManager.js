import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";

class LottoManager {
  constructor() {
    this.user = null;
    this.lottoCount = 0;
  }

  setUser(user) {
    this.user = user;
  }

  calculateLottoCount() {
    this.lottoCount = this.user.money / 1000;
  }

  publishLotto() {
    for (let i = 0; i < this.lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      // lotto.printLotto();
      this.user.lottoArr.push(lotto);
    }
  }
}

export default LottoManager;
