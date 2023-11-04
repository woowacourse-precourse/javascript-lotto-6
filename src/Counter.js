const LOTTO_PRICE = 1000;

export class Counter {
  #money;

  constructor(money) {
    this.#inputMoneyValidater(money);
    this.#inputMoneyDivideValidater(money);
    this.#money = money;
  }

  #inputMoneyValidater(money) {
    if (/^[+]?[1-9]\d*$/.test(money)) {
      return Number(money);
    } 
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  #inputMoneyDivideValidater(money) {
    let price = LOTTO_PRICE;
    if (money%price !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력 가능합니다.");
    }
  }

  lottoCounter() {
    let price = LOTTO_PRICE;
    const lottocounts = this.#money/price;
    return lottocounts
  }
}