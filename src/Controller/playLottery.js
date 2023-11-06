import Read from '../View/Input.js';
import Print from '../View/Output.js';
import Computer from '../Domain/Computer.js';
import User from '../Domain/User.js';
import MESSAGE from '../Constant/message.js';
import Lottery from '../Domain/Lottery.js';

class PlayLottery {
  #randomLottery;

  constructor() {
    this.random = new Computer();
    this.#randomLottery = null;
  }

  async getLotteryResult() {
    await this.createLotteries(await this.UserpurchaseTimes());
    this.lottery(await this.userSelectNumbers()).compareNumbers();
  }

  async UserpurchaseTimes() {
    const userInput = await Read.input(MESSAGE.QUESTION_PURCHASE);

    return new User(userInput).getNumberofPurchase();
  }

  async createLotteries(times) {
    Print.output(`${times}${MESSAGE.PAID_RESULT}`);
    Print.repeat(this.random.getLotteryNumbers(times));

    this.#randomLottery = this.random.getLotteryNumbers(times);

    return this.#randomLottery;
  }

  async userSelectNumbers() {
    const lotteryNumber = await Read.input(MESSAGE.QUESTION_PRIZE_NUMBER);
    const bonusNumber = await Read.input(MESSAGE.QUESTION_BONUS_NUMBER);

    return { lotteryNumber, bonusNumber };
  }

  lottery(userInput) {
    return new Lottery(this.#randomLottery, userInput);
  }
}

export default PlayLottery;
