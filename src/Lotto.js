import Output from "./utils/Output.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);    
    this.#numbers = numbers;
    const sortedNumbers = Parser.sort(numbers) 
    Output.printLottoNumbers(sortedNumbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }      
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
