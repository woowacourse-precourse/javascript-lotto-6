import { GAME, ERROR } from "./pages/text.js";
import inputUserLotto from "./components/inputUserLotto.js";
import randomBuyLotto from "./components/randomBuyLotto.js";
import printWinner from "./components/printWinner.js";
import InputValidator from "../src/utils/inputValids.js";

class Lotto {
  #numbers;
  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    const inputValidator = new InputValidator();
    inputValidator.validateNumber(numbers);

    // if (numbers.length !== 6) {
    //   throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    // }
  }

  // 추가 기능 구현

  getNumbers() {
    return this.#numbers;
  }

  // 추가 기능을 구현할 수 있습니다.
}

export default Lotto;
