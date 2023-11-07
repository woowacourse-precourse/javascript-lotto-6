import { PRIZE_CHECK } from "./Utils/constants";
import LottoValidator from "./Validator/lottoValidator";

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
}

export default Lotto;