class User {
  #money;
  #lottoList;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
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
  }

  getMoney() {
    return this.#money;
  }

  getLottoList() {
    return this.#lottoList;
  }
}

export default User;
