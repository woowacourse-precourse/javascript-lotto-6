import Validation from "./libs/Validation.js";
import Error from "./libs/Error.js";
import { WINNING_NUMBER } from "./libs/Constant.js";

class WinningNumbers {
  constructor(numbers) {
    this.validate(numbers);
    this.value = numbers;
  }

  validate(numbers) {
    Validation.checkNumberList(numbers);
  }
}

export default WinningNumbers;
