import InputManager from "./InputManager.js";
import OutputManager from "./OutputManager.js";
import Amount from "../model/Amount.js";
import Winning from "../model/Winning.js";
import Bonus from "../model/Bonus.js";
import EarnRate from "../model/EarnRate.js";
import { profitRate } from "../utils/caculate.js";
import { ERROR_MESSAGE } from "../constants/errors.js";
import { stringToNumber } from "../utils/conversion.js";

class ValidateManager {
  // 특정 값들이 Model들을 활용하여 유효성검사를 하고 가는 로직 모음(Error 발생 시 다시 입력하도록)
  constructor() {
    this.inputManager = new InputManager();
    this.outputManager = new OutputManager();
  }

  async getMoneyForLotto() {
    while (true) {
      try {
        const moneyForLotto = await this.inputManager.moneyForLotto();
        new Amount(moneyForLotto);
        return moneyForLotto;
      } catch (error) {
        this.outputManager.showError(error.message);
      }
    }
  }

  async getWinningBalls() {
    while (true) {
      try {
        const winningBalls = await this.inputManager.winningBallNumbers();
        new Winning(winningBalls);
        return winningBalls;
      } catch (error) {
        this.outputManager.showError(error.message);
      }
    }
  }

  async getBonusBall(winningBalls) {
    while (true) {
      try {
        const bonusBall = await this.inputManager.bonusBallNumbers();
        // class에서는 bonusBall 단일 변수에 대한 테스트만을 진행한다.
        new Bonus(bonusBall);
        // 당첨번호와 중복되는 숫자인지 체크하기
        if (winningBalls.includes(stringToNumber(bonusBall))) {
          throw new Error(ERROR_MESSAGE.isNumberExists);
        }
        return bonusBall;
      } catch (error) {
        this.outputManager.showError(error.message);
      }
    }
  }

  getEarnRate(moneyForLotto, winningPrizeSum) {
    try {
      const earnRate = profitRate(moneyForLotto, winningPrizeSum);
      new EarnRate(earnRate);
      return earnRate;
    } catch (error) {
      throw error;
    }
  }
}

export default ValidateManager;
