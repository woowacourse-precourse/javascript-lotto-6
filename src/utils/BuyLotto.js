export class BuyLotto {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  #validate(money) {
    this.#validateZero(money);
    this.#validateIsNumber(money);
    this.#validateDivideThousand(money);
  }

  #validateZero(money) {
    if (money === 0) {
      throw new Error("[ERROR] 구입 금액으로 0원은 입력할 수 없습니다.");
    }
  }

  #validateIsNumber(money) {
    const REGEX = /^[0-9]+$/;
    if (!REGEX.test(money)) {
      throw new Error("[ERROR] 구입 금액은 자연수만 입력이 가능합니다.");
    }
  }

  #validateDivideThousand(money) {
    if (money % 1000 !== 0) {
      throw new Error(
        "[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다."
      );
    }
  }
}
