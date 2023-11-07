import Validator from '../utils/Validator.js';
import CONSTANTS from '../utils/Constants.js';
import { PRIZE } from '../utils/Prize.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateGeneratedLotto(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  raffleLotto(mainNumberArray, bonusNumber) {
    const matchingNumberCount = this.raffleMainNumber(mainNumberArray);
    if (matchingNumberCount === CONSTANTS.bonusNumberConditionCount)
      return this.raffleBonusNumber(bonusNumber);
    return PRIZE[matchingNumberCount];
  }

  raffleMainNumber(mainNumberArray) {
    return CONSTANTS.mainNumberCount * 2 - new Set([...this.#numbers, ...mainNumberArray]).size;
  }

  raffleBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) return PRIZE.secondPrize;
    return PRIZE.thirdPrize;
  }
}

export default Lotto;
