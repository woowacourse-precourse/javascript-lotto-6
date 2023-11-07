import MESSAGE from '../Constant/message.js';
import Read from '../View/Input.js';

class User {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  async selectLottery() {
    const userLottery = this.#convertToNumber(await this.getLotteryInput());

    return userLottery;
  }

  #convertToNumber(array) {
    const result = array.map((el) => Number(el));

    return result;
  }

  async getLotteryInput() {
    const lotteryInput = await Read.input(MESSAGE.QUESTION_PRIZE_NUMBER);

    return this.#divdeEach(lotteryInput);
  }

  #divdeEach(input) {
    return input.split(',');
  }

  async selectBonus() {
    const bonusNumber = await Read.input(MESSAGE.QUESTION_BONUS_NUMBER);

    return bonusNumber;
  }

  getNumberofPurchase() {
    return this.#parseAsNumber(this.#amount) / 1000;
  }

  #parseAsNumber(string) {
    return Number(string);
  }
}

export default User;
