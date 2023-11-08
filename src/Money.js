import { ERRORMESSAGES } from "./util/Message";
import { MONEY_CONSTANTS } from "./util/constants";
const { LOTTO_PRICE, WINNINGS_LIST } = MONEY_CONSTANTS;
class Money {
  #money;
  #winningMoney = 0;
  #rankingCounts = [0, 0, 0, 0, 0];

  constructor(money) {
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
      throw new Error(ERRORMESSAGES.NOT_A_NUMBER);
    }
    if (money < LOTTO_PRICE) {
      throw new Error(ERRORMESSAGES.MONEY_RANGE);
    }
    if (money % LOTTO_PRICE !== 0) {
      throw new Error(ERRORMESSAGES.MONEY_DEVISION);
    }
    return true;
  }

  winnings(rank) {
    switch (rank) {
      case 1:
        return WINNINGS_LIST[0];
      case 2:
        return WINNINGS_LIST[1];
      case 3:
        return WINNINGS_LIST[2];
      case 4:
        return WINNINGS_LIST[3];
      case 5:
        return WINNINGS_LIST[4];
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
        return;
    }
  }

  rankingMoney(ranks) {
    ranks.forEach((rank) => {
      if (!Number.isNaN(Number(this.winnings(rank)))) {
        this.#winningMoney += this.winnings(rank);
        this.rankingCountsArray(rank);
      }
      return;
    });
  }
}

export default Money;
