import MESSAGE from '../Constant/message.js';
import Read from '../View/Input.js';

class User {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  #parseAsNumber(string) {
    return Number(string);
  }

  getNumberofPurchase() {
    return this.#parseAsNumber(this.#amount) / 1000;
  }

  #divideEachNumber(input) {
    const divideNum = input.split(',');

    const result = divideNum.map((el) => this.#convertStringtoNumber(el));

    return result;
  }

  #convertStringtoNumber(string) {
    const result = Number(string);

    return result;
  }

  async selectNumbers() {
    const lotteryNumber = await Read.input(MESSAGE.QUESTION_PRIZE_NUMBER);

    return this.#divideEachNumber(lotteryNumber);
  }

  async selectBonusNumber() {
    const bonusNumber = await Read.input(MESSAGE.QUESTION_BONUS_NUMBER);

    return bonusNumber;
  }
}

export default User;
