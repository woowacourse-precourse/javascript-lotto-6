import Create from './Create.js';
import User from '../Domain/User.js';
import Lotto from '../Lotto.js';

class PlayLottery {
  constructor() {
    this.user = new User();
    this.create = new Create();
  }

  async getLotteryResult() {
    await this.compareUserWith(await this.create.RandomLottery());
  }

  async compareUserWith(randoms) {
    await this.lotto(await this.user.selectLottery()).compareWith(randoms);
  }

  lotto(userNum) {
    return new Lotto(userNum);
  }
}

export default PlayLottery;
