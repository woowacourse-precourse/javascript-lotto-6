import Create from './Create.js';
import User from '../Domain/User.js';
import Lotto from '../Lotto.js';
import Print from '../View/Output.js';

class PlayLottery {
  constructor() {
    this.user = new User();
    this.create = new Create();
  }

  async draw() {
    try {
      await this.compareUserWith(await this.create.RandomLottery());
    } catch (error) {
      Print.output(error.message);
      await this.draw();
    }
  }

  async compareUserWith(randoms) {
    const lotto = new Lotto(await this.create.userLotteryNumber());
    const { matchResult, marginResult } = await lotto.compareWith(randoms);

    Print.repeatResult(matchResult);
    Print.marginResult(marginResult);
  }
}

export default PlayLottery;
