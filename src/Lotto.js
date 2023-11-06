import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "./constant/gameMessge.js";

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
    if (numbers.length !== Lotto.NUMBER_LENTH) {
      throw new Error(ERROR.lotto.length);
    }

    numbers.forEach((number) => {
      if (!(Lotto.NUMBER_MIN <= number && number <= Lotto.NUMBER_MAX)) {
        throw new Error(ERROR.lotto.numberRange);
      }

      if (typeof number !== "number" || Number.isNaN(number)) {
        throw new Error(ERROR.lotto.numeric);
      }
    });

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.lotto.duplicate);
    }
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
    if (money < Lotto.UNIT) {
      throw new Error(ERROR.purchase.minimunAmount);
    }

    if (isNaN(money)) {
      throw new Error(ERROR.purchase.numeric);
    }

    if (money % Lotto.UNIT !== 0) {
      throw new Error(ERROR.purchase.amountUnit);
    }

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
