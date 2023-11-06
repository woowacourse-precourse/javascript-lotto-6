import Calc from "./lib/Utils/Calc.js";
import DomainValidator from "./lib/Validator/DomainValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    DomainValidator.winNumbers(numbers);
  }

  validateBonusNumber(bonusNumber) {
    DomainValidator.bonusNumber(this.#numbers, bonusNumber);
  }

  calcResult(ticketItems, bonusNumber) {
    const prizeMap = Calc.prizeMap(ticketItems, this.#numbers, bonusNumber);
    const winRate = Calc.winRate(prizeMap);
    return { prizeMap, winRate };
  }
}

export default Lotto;
