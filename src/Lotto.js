import { MATCH_TO_PRIZE, PRIZE_CHECK } from "./utils/constants";
import LottoValidator from "./Validator/LottoValidator";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidator.validateWinningNumbers(numbers);
  }

  validateBonusNumber(bonusNumber) {
  LottoValidator.validateBonusNumber(this.#numbers, bonusNumber);
  }

  calculatePrize(lottoCalculator) {
    const result = lottoCalculator.#numbers.filter((number) => this.#numbers.includes(number));
    const hasBonus = this.#numbers.includes(lottoCalculator.bonus);
    const prizeResult = PRIZE_CHECK[result.length][hasBonus];
    return prizeResult;
  }

  calculateResult() {
    
  }

}

export default Lotto;