import Output from "./utils/Output.js";
import Parser from "./utils/Parser.js";
import Validator from "./utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;    
    const sortedNumbers = Parser.sort(numbers)    
    Output.printLottoNumbers(sortedNumbers);
  }

  #validate(numbers) {
    Validator.winningNumbers(numbers);    
  }

  calculateResult(winningNumbers, bonusNumber) {
    const matchingNumbers = this.#numbers.filter(number => winningNumbers.includes(number));
    const bonusMatch = this.#numbers.includes(bonusNumber);

    return {
      matchingNumbers: matchingNumbers.length,
      bonusMatch: bonusMatch
    };
  }
}

export default Lotto;
