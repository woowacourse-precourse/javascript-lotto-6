import UserInputs from './UserInputs.js';
import Utils from './Utils.js';
import Validation from './Validation.js';

class DrawingLotto {
  QUESTIONS = {
    winningNumbers: '당첨 번호를 입력해 주세요.',
    bonusNumber: '보너스 번호를 입력해 주세요.',
  };

  async #drawWinningNumbers() {
    const userNumbers = await UserInputs.ask(this.QUESTIONS.winningNumbers);
    const winningNumbers = Utils.convertInputNumbers(userNumbers);

    const validation = new Validation();
    validation.isValidWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  async #drawBonusNumber() {
    const userNumber = await UserInputs.ask(this.QUESTIONS.bonusNumber);
    const winningNumbers = await this.getWinningNumbers();

    const validation = new Validation();
    validation.isValidBonusNumber(userNumber, winningNumbers);

    return userNumber;
  }

  async getWinningNumbers() {
    const winningNumbers = await this.#drawWinningNumbers();
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await this.#drawBonusNumber();
    return bonusNumber;
  }
}

export default DrawingLotto;
