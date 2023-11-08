import { InputValidator } from "./utils/InputValidator.js";
import Lotto from "./Lotto.js";

class Input {
  #money = 0;
  #winningLotto = [];

  constructor(money) {
    this.#money = money;
  }

  inputMoney() {
    if (!InputValidator.validMoney(this.#money)) {
      throw new Error("[ERROR] 금액 오류입니다. 다시 입력해 주세요.");
    }
    return Math.floor(this.#money / 1000);
  }

  inputWin() {
    if (!InputValidator.validWinningNumber(this.#money)) {
      throw new Error("[ERROR] 번호 오류입니다. 다시 입력해 주세요.");
    }
    this.#winningLotto = this.#money.split(",");
    this.#winningLotto = this.#winningLotto.map(Number);
    new Lotto(this.#winningLotto);
    return this.#winningLotto;
  }

  inputBonus() {
    if (!InputValidator.validBonusNumber(this.#money)) {
      throw new Error("[ERROR] 번호 오류입니다. 다시 입력해 주세요.");
    }
    return this.#money;
  }
}

export default Input;
