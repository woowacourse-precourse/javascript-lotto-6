class Money {
  #money;
  #winningMoney;
  #rankingCounts = [0, 0, 0, 0, 0];

  constructor(money, ranks) {
    this.#validate(money);
    this.#money = money;
    this.rankingMoney(ranks);
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

  winnings(rank) {
    switch (rank) {
      case 1:
        this.#winningMoney += 2000000000;
        this.#rankingCounts[0]++;
        break;
      case 2:
        this.#winningMoney += 30000000;
        this.#rankingCounts[1]++;
        break;
      case 3:
        this.#winningMoney += 1500000;
        this.#rankingCounts[2]++;
        break;
      case 4:
        this.#winningMoney += 50000;
        this.#rankingCounts[3]++;
        break;
      case 5:
        this.#winningMoney += 5000;
        this.#rankingCounts[4]++;
        break;
      default:
        break;
    }
  }

  rankingMoney(ranks) {
    ranks.forEach((rank) => {
      this.winnings(rank);
    });
  }
}

export default Money;
