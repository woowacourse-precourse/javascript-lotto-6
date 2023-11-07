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
    try {
      await this.#randomNumber(await this.userPurchaseTimes());
      Print.repeatLottery(this.#randomNum);
    } catch (error) {
      throw new Error(error.message);
    }

    return this.#randomNum;
  }

  async userPurchaseTimes() {
    const userInput = await Read.input(MESSAGE.QUESTION_PURCHASE);

    if (Number.isNaN(Number(userInput))) {
      throw new Error('[ERROR]');
    }

    const purchaseTimes = new User(userInput).getNumberofPurchase();

    Print.output(`${purchaseTimes}${MESSAGE.RESULT_PAID}`);

    return purchaseTimes;
  }

  #randomNumber(times) {
    this.#randomNum = this.computer.getLotteryNumbers(times);
  }
}

export default Create;
