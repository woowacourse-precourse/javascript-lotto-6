import MESSAGE from '../Constant/message.js';
import Computer from '../Domain/Computer.js';
import User from '../Domain/User.js';
import Read from '../View/Input.js';
import Print from '../View/Output.js';

class Create {
  #randomNum;

  constructor() {
    this.random = new Computer();
    this.#randomNum = null;
  }

  async RandomLottery() {
    const lotteries = await this.#createRandom(await this.userPurchaseTimes());

    return lotteries;
  }

  async userPurchaseTimes() {
    const userInput = await Read.input(MESSAGE.QUESTION_PURCHASE);
    const purchaseTimes = new User(userInput).getNumberofPurchase();

    return purchaseTimes;
  }

  #createRandom(times) {
    this.#randomNum = this.random.getLotteryNumbers(times);
    this.printPayResult(times);

    return this.#randomNum;
  }

  async printPayResult(times) {
    Print.output(`${times}${MESSAGE.PAID_RESULT}`);
    Print.repeatLottery(this.#randomNum);
  }
}

export default Create;
