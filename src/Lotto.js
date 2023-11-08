import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  static PRICE = 1000;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const isNotInRange = number => number < 1 || number > 45;
    if (numbers.some(isNaN)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.some(isNotInRange)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
    }
  }

  static validatePurchaseAmount(input) {
    const sanitizedInput = input.replace(/,/g, '');
    const amount = parseInt(sanitizedInput, 10);
    if (isNaN(amount) || amount <= 0 || amount % Lotto.PRICE !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return amount;
  }

  static validateBonusNumber(input, winningNumbers) {
    const bonusNumber = parseInt(input.trim(), 10);
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스번호는 숫자여야 합니다.");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스번호는 1에서 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스번호는 당첨 번호와 달라야 합니다.");
    }
    return bonusNumber;
  }

  get numbers() {
    return this.#numbers;
  }

  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default Lotto;
