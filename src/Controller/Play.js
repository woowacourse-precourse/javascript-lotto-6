import Create from './Create.js';
import User from '../Domain/User.js';
import Lotto from '../Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class PlayLottery {
  constructor() {
    this.user = new User();
    this.create = new Create();
  }

  async getLotteryResult() {
    try {
      await this.compareUserWith(await this.create.RandomLottery());
    } catch (error) {
      Console.print(error.message);
    }
  }

  async compareUserWith(randoms) {
    const lottoInstance = new Lotto(await this.user.selectLottery());
    await lottoInstance.compareWith(randoms);
  }
}

export default PlayLottery;
