import { Console, Random } from "@woowacourse/mission-utils";
import { InputValidator } from "./utils/InputValidator.js";
import Lotto from "./Lotto.js";

class Input {
  #money = 0;
  #winningLotto = [];
  #bonus = 0;

  constructor(money) {
    this.#money = money;
  }

  inputMoney() {
    if (!InputValidator.validMoney(this.#money)) {
      throw new Error("[ERROR] 금액 오류"); // 다시 입력받아야 함
    } else {
      return Math.floor(this.#money / 1000);
    }
  }

  inputWin() {
    if (!InputValidator.validWinningNumber(this.#money)) {
      throw new Error("[ERROR]번호 오류");
    } else {
      this.#winningLotto = this.#money.split(",");
      this.#winningLotto = this.#winningLotto.map(Number);
      new Lotto(this.#winningLotto);
      return this.#winningLotto;
    }
  }

  inputBonus() {
    if (!InputValidator.validBonusNumber(this.#money)) {
      throw new Error("[ERROR]번호 오류");
    } else {
      return this.#money;
    }
  }
}

export default Input;
