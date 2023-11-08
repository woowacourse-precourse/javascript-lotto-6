import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class User {
  constructor(money) {
    this.money = money;
    this.lottos = null;
  }

  getLottos() {
    return this.lottos;
  }

  buyLottos() {
    const lottos = Array.from({ length: this.money / 1000 }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers).getNumbers();
    });
    this.lottos = lottos;
    return this.lottos;
  }
}
export default User;
