import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./validator/Validator";
import { TOTAL_LOTTO_NUMBERS } from "./constants/constants";
import Output from "./view/Output";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers
  }

  #validate(numbers) { 
    Validator.isNumbersValid(String(numbers))
  }

  returnWinningNumbers() {
    return String(this.#numbers).split(',').map(Number)
  }

  returnOneLotto() {
    return this.#numbers
  }

  calculateWinningStats(lottos, winnings, bonusNumber) {
    const STATS = [0, 0, 0, 0, 0]
    const WINNING_NUMBERS = winnings.map(Number);

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