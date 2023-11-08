class Person {
  #money;

  #lottos;

  constructor(money) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validate(money) {
    if (
      isNaN(money) ||
      money[0] === '0' ||
      /\s/g.test(money) ||
      money[0] === '-' ||
      Number(money) < 1000
    ) {
      throw new Error(
        '[ERROR] 구매 금액은 최소 1000이상의 양의 정수여야 합니다.'
      );
    }
  }

  purchasedLottoNumber() {
    return Math.floor(this.#money / 1000);
  }

  purchasedLottoInformation(lottoArray) {
    this.#lottos = lottoArray;
  }

  goToLottoShop() {
    return this.#lottos;
  }

  getMoney() {
    return Math.floor(this.#money / 1000) * 1000;
  }
}

export default Person;
