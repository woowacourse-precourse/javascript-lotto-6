import { MATCH_TO_PRIZE } from "./utils/constants";
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
    let prizeResult;
    if (hasBonus) {
      prizeResult = PRIZE_CHECK[result.length]["true"];
    }
    if (!hasBonus) {
      prizeResult = PRIZE_CHECK[result.length]["false"];
    }
  }

  calculateResult() {
    
  }

}

export default Lotto;