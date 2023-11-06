class Money {
  #money;
  #winningMoney;

  constructor(money, rank) {
    this.#validate(money);
    this.#money = money;
    this.rankingMoney(rank);
  }

  get getMoney() {
    return this.#money;
  }

  #validate(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error("[ERROR] 돈은 숫자여야 합니다.");
    }
    if (money < 1000) {
      throw new Error("[ERROR] 돈은 1000원 이상이여야 합니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 돈은 1000원으로 나누어 떨어져야 합니다.");
    }
    return true;
  }

  rankingMoney(rank) {
    switch (rank) {
      case 1:
        this.#winningMoney += 2000000000;
        break;
      case 2:
        this.#winningMoney += 30000000;
        break;
      case 3:
        this.#winningMoney += 1500000;
        break;
      case 4:
        this.#winningMoney += 50000;
        break;
      case 5:
        this.#winningMoney += 5000;
        break;
      default:
        break;
    }
  }
}

export default Money;
