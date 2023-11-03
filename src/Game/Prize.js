import IO from "../Util/IOHandler.js";
import Constants from "../Util/Constants.js";
import Check from "../Util/Check.js";

export default class Prize {
  constructor() {
    this.Check = new Check();
  }

  inputConverter(input) {
    const aryStrings = input.split(",").map((str) => str.trim());
    const aryNumbers = aryStrings.map((str) => parseInt(str, 10));
    return aryNumbers;
  }

  async baseNum() {
    while (true) {
      try {
        const input = await IO.get(Constants.input.numbers);
        const numbers = this.inputConverter(input);
        this.Check.base(numbers);
        return numbers;
      } catch (error) {
        IO.print(error);
      }
    }
  }

  async bonusNum(baseNum) {
    while (true) {
      try {
        let input = await IO.get(Constants.input.bonus);
        input = this.inputConverter(input);
        this.Check.isValidNumber(input);

        const number = parseInt(input, 10);
        this.Check.bonus(baseNum, number);
        return number;
      } catch (error) {
        IO.print(error);
      }
    }
  }
}
