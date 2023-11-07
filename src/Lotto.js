import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "./constant/gameMessge.js";
import { validateLotto } from "./utils/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static NUMBER_LENTH = 6;
  static NUMBER_MIN = 1;
  static NUMBER_MAX = 45;
  static UNIT = 1000;

  #validate(numbers) {
    validateLotto(numbers);
  }

  static generateLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      Lotto.NUMBER_MIN,
      Lotto.NUMBER_MAX,
      Lotto.NUMBER_LENTH,
    );
    const numbers = randomNumbers.sort((current, next) => current - next);

    return new Lotto(numbers);
  }

  static buyLottoTickets(money) {
    const purchaseAmount = money / Lotto.UNIT;
    const lottoTickets = [];

    for (let i = 0; i < purchaseAmount; i++) {
      lottoTickets.push(Lotto.generateLottoNumber());
    }

    return lottoTickets;
  }

  static toArray(number) {
    return new Lotto(number.split(",").map(Number));
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
