class User {
  #money;
  #usedMoney;
  #lottoList;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.#usedMoney = 0;
    this.#lottoList = [];
  }

  #validate(money) {
    if (money < 0) {
      throw new Error("[ERROR] 금액은 양수여야 합니다.");
    }
  }

  buyLotto(lotto, lottoPrice) {
    this.#lottoList.push(lotto);
    this.#money -= lottoPrice;
    this.#usedMoney += lottoPrice;
  }

  getMoney() {
    return this.#money;
  }

  getUsedMoney() {
    return this.#usedMoney;
  }

  getLottoList() {
    return this.#lottoList;
  }
}

export default User;
