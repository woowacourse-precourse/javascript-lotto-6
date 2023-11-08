import Utils from './Utils.js';

const QUESTIONS = {
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
  purchaseLottoPrice: '구입금액을 입력해 주세요.',
};

class UserInput {
  async #drawWinningNumbers() {
    const userNumbers = await Utils.ask(QUESTIONS.winningNumbers);
    const winningNumbers = Utils.convertInputNumbers(userNumbers);
    return winningNumbers;
  }

  async #drawBonusNumber() {
    const userNumber = await Utils.ask(QUESTIONS.bonusNumber);
    return userNumber;
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
