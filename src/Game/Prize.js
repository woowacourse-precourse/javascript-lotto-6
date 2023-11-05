import IO from "../Util/IOHandler.js";
import Constants from "../Util/Constants.js";
import Check from "../Util/Check.js";

export default class Prize {
  #line;
  #bonus;

  constructor() {
    this.Check = new Check();
  }

  async lotteryLine(test = null) {
    while (true) {
      try {
        const input = await IO.get(Constants.input.numbers);
        const numbers = IO.stringConverter(input);
        this.Check.base(numbers);
        this.#line = numbers;
        return;
      } catch (error) {
        IO.print(error);
        if (test == "test") throw error;
      }
    }
  }

  async bonusNum(test = null) {
    while (true) {
      try {
        let input = await IO.get(Constants.input.bonus);
        input = IO.stringConverter(input);
        this.Check.isValidNumber(input);

        const number = parseInt(input, 10);
        this.Check.bonus(this.#line, number);
        this.#bonus = number;
        return;
      } catch (error) {
        IO.print(error);
        if (test == "test") throw error;
      }
    }
  }

  show() {
    const winningNumbers = {
      line: this.#line,
      bonus: this.#bonus,
    };
    return winningNumbers;
  }
}
