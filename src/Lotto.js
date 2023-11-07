import DomainValidator from "./lib/Validator/DomainValidator.js";
import { MATCH_TO_PRIZE } from "./lib/Constants.js";

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

  calcPrize(referenceLotto) {
    const match = this.#calcMatch(referenceLotto);
    const bonusFlag = this.#numbers.includes(referenceLotto.bonus);
    const prize = MATCH_TO_PRIZE[match][bonusFlag];
    return prize;
  }

  // 같은 클래스의 인스턴스들은 프라이빗 필드에 접근할 수 있음
  // 일부 환경에서 적용이 안 될 수 있으니 확인 필요
  #calcMatch(referenceLotto) {
    const result = referenceLotto.#numbers.filter((number) =>
      this.#numbers.includes(number),
    );
    return result.length;
  }
}

export default Lotto;
