/**
 * 추후, 맨 처음 docs 커밋 바꾸기 -> 동사로 시작하게.
 */
import Lottery from './domain/Lottery.js';
import { outputErrorComment } from './view/outputView.js';

class App {
  lottery = new Lottery();

  #isInputStepEnd = {
    payMoney: false,
    winningNumberList: false,
    bonusNumber: false,
  };

  async handlePayMoneyInput() {
    if (!this.#isInputStepEnd.payMoney) {
      await this.lottery.readPayMoney();
      this.#isInputStepEnd.payMoney = true;
    }
  }

  async handleWinningNumberInput() {
    if (!this.#isInputStepEnd.winningNumberList) {
      await this.lottery.readWinningNumberList();
      this.#isInputStepEnd.winningNumberList = true;
    }
  }

  async handleBonusNumberInput() {
    if (!this.#isInputStepEnd.bonusNumber) {
      await this.lottery.readBonusNumber();
      this.#isInputStepEnd.bonusNumber = true;
    }
  }

  async readInputs() {
    await this.handlePayMoneyInput();
    await this.handleWinningNumberInput();
    await this.handleBonusNumberInput();
  }

  resultIssues() {
    this.lottery.matchNumbers();
    this.lottery.printWinnigCount();
  }

  checkErrorStep(error) {
    let errorStep = '';
    Object.keys(this.#isInputStepEnd).forEach((curStep) => {
      if (error.message.includes(curStep)) {
        this.#isInputStepEnd[curStep] = false;
        errorStep = curStep;
      }
    });
    return errorStep;
  }

  async play() {
    do {
      try {
        await this.readInputs();
      } catch (error) {
        const errorStep = this.checkErrorStep(error);
        outputErrorComment(error, errorStep);
      }
    } while (Object.values(this.#isInputStepEnd).includes(false));
    this.resultIssues();
  }
}

export default App;
