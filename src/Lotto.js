import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    numbers.forEach((number) => {
      if (!(1 <= number && number <= 45)) {
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 자연수입니다.");
      }

      if (typeof number !== "number" || Number.isNaN(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    });

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자입니다.");
    }
  }

  static generateLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const numbers = randomNumbers.sort((current, next) => current - next);

    return new Lotto(numbers);
  }

  static buyLottoTickets(money) {
    if (money < 1000) {
      throw new Error("[ERROR] 로또는 1000원부터 구입할 수 있습니다.");
    }

    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위입니다.");
    }
    const purchaseAmount = money / 1000;

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
