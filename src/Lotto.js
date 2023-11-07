import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "./constant/gameMessge.js";
import { validateLotto } from "./utils/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    numbers.sort((current, next) => current - next);
  }

  static NUMBER_LENTH = 6;
  static NUMBER_MIN = 1;
  static NUMBER_MAX = 45;
  static UNIT = 1000;

  #validate(numbers) {
    validateLotto(numbers);
  }

  static generateLottoNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      Lotto.NUMBER_MIN,
      Lotto.NUMBER_MAX,
      Lotto.NUMBER_LENTH,
    );

    return new Lotto(numbers);
  }

  static buyLottoTickets(money) {
    const purchaseAmount = money / Lotto.UNIT;

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
