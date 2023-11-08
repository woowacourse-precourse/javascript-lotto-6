import { LOTTO, REWARD } from "./util/constant.js";
class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  // results = rankCounsts
  getProfitRate(results) {
    let amount = results.length * LOTTO.price;
    let rewards = results.map((rank) => this.getReward(rank));
    const sumReward = rewards.reduce((acc, current) => acc + current, 0);
    return ((sumReward / amount) * 100).toFixed(1);
  }

  // Lottos = Lotto 인스턴스 배열
  getLottoRanks(Lottos) {
    const results = [];
    Lottos.forEach((Lotto) => {
      results.push(this.#getLottoRank(Lotto.getLotto));
    });
    return results;
  }

  // results = 당첨순위를 저장한 배열
  getResultRankCounts(results) {
    let rankCount = { fifth: 0, fourth: 0, third: 0, second: 0, first: 0 };
    results.forEach((rank) => {
      if (rank === 5) {
        rankCount.fifth += 1;
      } else if (rank === 4) {
        rankCount.fourth += 1;
      } else if (rank === 3) {
        rankCount.third += 1;
      } else if (rank === 2) {
        rankCount.second += 1;
      } else if (rank === 1) {
        rankCount.first += 1;
      }
    });
    return rankCount;
  }

  // 로또 순위 반환
  #getLottoRank(Lotto) {
    const result = Lotto.filter((num) =>
      this.#winningNumbers.includes(num)
    ).length;
    switch (result) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (Lotto.includes(this.#bonusNumber)) {
          return 2;
        }
        return 3;
      case 6:
        return 1;
      default:
        return 0;
    }
  }

  // 상금 반환
  getReward(rank) {
    let money;
    switch (rank) {
      case 5:
        money = REWARD.fifth;
        break;
      case 4:
        money = REWARD.fourth;
        break;
      case 3:
        money = REWARD.third;
        break;
      case 2:
        money = REWARD.second;
        break;
      case 1:
        money = REWARD.first;
        break;
      default:
        money = REWARD.zero;
    }
    return money;
  }
}

export default LottoMachine;
