import Read from '../View/Input.js';
import Print from '../View/Output.js';
import Computer from '../Domain/Computer.js';
import User from '../Domain/User.js';
import MESSAGE from '../Constant/message.js';
import Lotto from '../Lotto.js';

class PlayLottery {
  #randomLottery;

  constructor() {
    this.random = new Computer();
  }

  async getLotteryResult() {
    const randoms = await this.createLotteries(await this.userpurchaseTimes());
    await this.lotto(await new User().selectNumbers()).getResult(randoms);
  }

  async userpurchaseTimes() {
    const userInput = await Read.input(MESSAGE.QUESTION_PURCHASE);

    return new User(userInput).getNumberofPurchase();
  }

  async createLotteries(times) {
    const randomNum = this.random.getLotteryNumbers(times);

    Print.output(`${times}${MESSAGE.PAID_RESULT}`);
    Print.repeatLottery(randomNum);

    return randomNum;
  }

  lotto(userNum) {
    return new Lotto(userNum);
  }
}

export default PlayLottery;
