import MESSAGE from '../Constant/message.js';
import Computer from '../Domain/Computer.js';
import User from '../Domain/User.js';
import Read from '../View/Input.js';
import Print from '../View/Output.js';

class Create {
  #randomNum;

  constructor() {
    this.computer = new Computer();
    this.#randomNum = null;
  }

  async RandomLottery() {
    await this.#randomNumber(await this.userPurchaseTimes());
    Print.repeatLottery(this.#randomNum);

    return this.#randomNum;
  }

  async userPurchaseTimes() {
    const userInput = await Read.input(MESSAGE.QUESTION_PURCHASE);
    const purchaseTimes = new User(userInput).getNumberofPurchase();

    Print.output(`${purchaseTimes}${MESSAGE.PAID_RESULT}`);

    return purchaseTimes;
  }

  #randomNumber(times) {
    this.#randomNum = this.computer.getLotteryNumbers(times);
  }
}

export default Create;
