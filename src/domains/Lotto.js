import { ConsoleError } from "../utils/CustomError.js"
import ERROR from "../constants/error.js";
import SET_LOTTO from "../constants/lotto.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== SET_LOTTO.lotto.number) {
      throw new ConsoleError(ERROR.lotto.invalidCount);
    }

    numbers.forEach((number) => {
      this.#checkNumber(number)
    })

  }

  #checkNumber(number){
    if(isNaN(number)){
      throw new ConsoleError(ERROR.common.notANumber)
    }

    if(!(number >= SET_LOTTO.lotto.min && number <= SET_LOTTO.lotto.max)){
      throw new ConsoleError(ERROR.lotto.invalidRange)
    }

    this.#isDuplicate(number)
  }

  #isDuplicate(number){
    let counter = 0

    this.#numbers.forEach((check) => {
      if(check === number){
        counter++
      }
    })

    if(counter > 1){
      throw new ConsoleError(ERROR.lotto.duplicate)
    }

  }

  getLottoNumbers(){
    return this.#numbers
  }

  getBonus(number){
    this.#checkNumber(number);
    this.#checkBonus(number);

    return number;
  }

  #checkBonus(number){
    const check = this.#numbers.findIndex((lotto) => lotto === number)

    if(check !== -1){
      throw new ConsoleError(ERROR.lotto.duplicate)
    }
  }
}

export default Lotto;
