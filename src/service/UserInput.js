import Utils from './Utils.js';
import { QUESTIONS } from './Constants.js';

class UserInput {
  async #drawWinningNumbers() {
    const userNumbers = await Utils.ask(QUESTIONS.winningNumbers);
    const winningNumbers = Utils.convertInputNumbers(userNumbers);
    return winningNumbers;
  }

  async #drawBonusNumber() {
    const userNumber = await Utils.ask(QUESTIONS.bonusNumber);
    const bonusNumber = Number(userNumber);
    return bonusNumber;
  }

  async #receiveUserCost() {
    const userCost = await Utils.ask(QUESTIONS.purchaseLottoPrice);
    const costStringToNumber = Number(userCost);
    return costStringToNumber;
  }

  async getWinningNumbers() {
    const winningNumbers = await this.#drawWinningNumbers();
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await this.#drawBonusNumber();
    return bonusNumber;
  }

  async getCost() {
    const cost = await this.#receiveUserCost();
    return cost;
  }
}

export default UserInput;
