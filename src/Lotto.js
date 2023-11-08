import { MissionUtils } from "@woowacourse/mission-utils";
import { validateLotto } from "./utils/Validate.js";
import { GAME } from "./constant/GameConfig.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    numbers.sort((current, next) => current - next);
  }

  #validate(numbers) {
    validateLotto(numbers);
  }

  static generateLottoNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      GAME.settings.minNumber,
      GAME.settings.maxNumber,
      GAME.settings.numberLength,
    );

    return new Lotto(numbers);
  }

  static purchaseLotto(money) {
    const purchaseAmount = money / GAME.settings.unit;

    return Array.from({ length: purchaseAmount }).map(() => Lotto.generateLottoNumber());
  }

  toPrintableString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  includesNumber(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
