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
      const purchaseTimes = await this.userPurchaseTimes();
      await this.#getRandomNumber(purchaseTimes);

      Print.output(`${purchaseTimes}${MESSAGE.RESULT_PAID}`);
      Print.repeatLottery(this.#randomNum);
    } catch (error) {
      throw new Error(error.message);
    }

    return this.#randomNum;
  }

  async userLotteryNumber() {
    const lotteryInput = await Read.input(MESSAGE.QUESTION_PRIZE_NUMBER);

    return new User().getLotteryInput(lotteryInput);
  }

  async userBonusNumber() {
    const bonusNumber = await Read.input(MESSAGE.QUESTION_BONUS_NUMBER);

    return bonusNumber;
  }

  async userPurchaseTimes() {
    const userInput = await Read.input(MESSAGE.QUESTION_PURCHASE);
    this.validateNumberInput(userInput);

    return new User(userInput).getNumberofPurchase();
  }

  #getRandomNumber(times) {
    this.#randomNum = this.computer.getLotteryNumbers(times);
  }

  validateNumberInput(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 잘못된 입력 형식입니다.');
    }
  }
}

export default Create;
