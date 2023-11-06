class Person {
  #money;

  #lottos;

  constructor(money) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validate(money) {
    if (Number.isNaN(money) || money[0] === '0') {
      throw new Error('[Error] 구매 금액은 양의 정수 입니다.');
    }
  }

  purchasedLottoNumber() {
    return this.#money % 1000;
  }

  purchasedLottoInformation(lottoArray) {
    this.#lottos = lottoArray;
  }

  goToLottoShop() {
    return this.#lottos;
  }

  getMoney() {
    return (this.#money % 1000) * 1000;
  }
}

export default Person;
