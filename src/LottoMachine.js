import Lotto from "./Lotto";
import { Random } from "@woowacourse/mission-utils";
import { REWARD } from "./constant";
class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  // 구매 금액을 받고 로또를 생성한다.
  createLottos(amount) {
    const n = amount / 1000;
    const lottos = [];
    for (let i = 0; i < n; i++) {
      const nums = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(nums));
    }
    return lottos;
  }

  getProfitRate(results) {
    let amount = results.length * 1000;
    let rewards = results.map((rank) => this.getReward(rank));
    const sumReward = rewards.reduce((acc, current) => acc + current, 0);
    return ((sumReward / amount) * 100).toFixed(2);
  }

  // Lottos 는 Lotto 인스턴스 배열
  getLottoRanks(Lottos) {
    const results = [];
    Lottos.forEach((Lotto) => {
      results.push(getLottoRank(Lotto));
    });
    return results;
  }

  // 당첨순위를 저장한 배열
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

  getLottoRank(Lotto) {
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
