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
    const NUMBER_STRING = numbers.toString();
    inputValidator.validateNumber(NUMBER_STRING);

    // if (numbers.length !== 6) {
    //   throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    // }

    // if (new Set(numbers).size !== numbers.length)
    //   throw new Error(ERROR.input_double_num);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
