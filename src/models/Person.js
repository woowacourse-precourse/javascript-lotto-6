class Person {
  #money;

  #lottos;

  constructor(money) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validate(money) {
    if (isNaN(money) || money[0] === '0') {
      throw new Error('[ERROR] 구매 금액은 양의 정수 입니다.');
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
