import IO from "../Util/IOHandler.js";
import Constants from "../Util/Constants.js";
import Check from "../Util/Check.js";

export default class Prize {
  #line;

  #bonus;

  constructor() {
    this.Check = new Check();
  }

  async init() {
    await this.lotteryLine();
    await this.bonusNum();
  }

  async lotteryLine(test = null) {
    let numbers = null;
    while (!numbers) {
      numbers = await this.getLineInput(test);
      if (numbers) {
        this.#line = numbers;
        IO.print("");
      }
    }
  }

  async getLineInput(test = null) {
    try {
      const input = await IO.get(Constants.input.numbers);
      const numbers = IO.stringConverter(input);
      this.Check.base(numbers);
      return numbers;
    } catch (error) {
      IO.print(error.message);
      if (test === "test") throw error;
      return null;
    }
  }

  async bonusNum(test = null) {
    let number = null;
    while (!number) {
      number = await this.getBonusInput(test);
      if (number) {
        this.#bonus = number;
        IO.print("");
      }
    }
  }

  async getBonusInput(test = null) {
    try {
      let input = await IO.get(Constants.input.bonus);
      input = IO.stringConverter(input);
      this.Check.isValidNumber(input);

      const number = parseInt(input, 10);
      this.Check.bonus(this.#line, number);
      return number;
    } catch (error) {
      IO.print(error);
      if (test === "test") throw error;
      return null;
    }
  }

  get() {
    const winningNumbers = {
      line: this.#line,
      bonus: this.#bonus,
    };
    return winningNumbers;
  }
}
