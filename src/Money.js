class Money {
  #money;
  #winningMoney = 0;
  #rankingCounts = [0, 0, 0, 0, 0];

  constructor(money, ranks) {
    this.#validate(money);
    this.#money = money;
  }

  get getMoney() {
    return this.#money;
  }

  get getWinningMoney() {
    return this.#winningMoney;
  }

  get getRankingCounts() {
    return this.#rankingCounts;
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
        return 2000000000;
      case 2:
        return 30000000;
      case 3:
        return 1500000;
      case 4:
        return 50000;
      case 5:
        return 5000;
      default:
        break;
    }
  }

  rankingCountsArray(rank) {
    switch (rank) {
      case 1:
        return this.#rankingCounts[0]++;
      case 2:
        return this.#rankingCounts[1]++;
      case 3:
        return this.#rankingCounts[2]++;
      case 4:
        return this.#rankingCounts[3]++;
      case 5:
        return this.#rankingCounts[4]++;
      default:
        break;
    }
  }

  rankingMoney(ranks) {
    ranks.forEach((rank) => {
      this.#winningMoney += this.winnings(rank);
      this.rankingCountsArray(rank);
    });
  }
}

export default Money;
