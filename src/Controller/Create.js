import MESSAGE from '../Constant/message.js';
import Computer from '../Domain/Computer.js';
import User from '../Domain/User.js';
import Read from '../View/Input.js';
import Print from '../View/Output.js';
import { checkValidateNumbers, validateInput } from '../Utils/validation.js';

class Create {
  #randomNumbers;

  constructor() {
    this.computer = new Computer();
    this.#randomNumbers = null;
  }

  async RandomLottery() {
    const purchaseTimes = await this.userPurchaseTimes();
    await this.#RandomNumber(purchaseTimes);

    Print.output(`${purchaseTimes}${MESSAGE.RESULT_PAID}`);
    Print.repeatLottery(this.#randomNumbers);

    return this.#randomNumbers;
  }

  async userPurchaseTimes() {
    const userInput = await Read.input(MESSAGE.QUESTION_PURCHASE);
    validateInput(userInput);

    const result = new User(userInput).getNumberofPurchase();

    return result;
  }

  #RandomNumber(times) {
    this.#randomNumbers = this.computer.getLotteryNumbers(times);
  }

  async userLotteryNumber() {
    const lotteryInput = await Read.input(MESSAGE.QUESTION_PRIZE_NUMBER);

    return new User().getLotteryNumber(lotteryInput);
  }

  async userBonusNumber() {
    const bonusNumber = await Read.input(MESSAGE.QUESTION_BONUS_NUMBER);
    checkValidateNumbers(bonusNumber);

    return bonusNumber;
  }
}

export default Create;
