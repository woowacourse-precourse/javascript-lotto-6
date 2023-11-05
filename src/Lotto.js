import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./validator/Validator";


// @NOTE - 당첨된 번호
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers
  }

  #validate(numbers) { 
    this.validator = new Validator();
    const ERROR_MESSAGE = this.validator.isWinningNumbersValid(String(numbers));

    if (ERROR_MESSAGE) {
      MissionUtils.Console.print(ERROR_MESSAGE)
      return;
    }
  }
  
  returnValue() {
    this.#numbers = String(this.#numbers).split(',')
    return this.#numbers
  }

  calculateWinningStats(lottos, bonusNumber) {
    const STATS = [0, 0, 0, 0, 0]
    const WINNING_NUMBERS = this.#numbers.map(Number);

    lottos.forEach((lotto) => {
      const RESULT = WINNING_NUMBERS.filter(el => lotto.includes(el)).length;
      
      if (RESULT === 5) {
        STATS[lotto.includes(bonusNumber) ? 3 : 2]++;
      }
      STATS[RESULT - 3]++;
    });
    
    return STATS
  }
}

export default Lotto;