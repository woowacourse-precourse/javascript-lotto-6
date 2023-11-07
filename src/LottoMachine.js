import Lotto from "./Lotto";
import { Random } from "@woowacourse/mission-utils";
import { REWARD } from "./constant";
class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validateLottoNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #validateLottoNumbers(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복 되지않는 수가 6개여야 합니다.");
    }
  }
  #validateBonusNumber(number) {}

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
  getLottoResult(Lottos) {
    const results = [];
    Lottos.forEach((Lotto) => {
      results.push(getResultRank(Lotto));
    });
    return results;
  }

  getResultRank(Lotto) {
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
    let money = 0;
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
        money = 0;
    }
    return money;
  }
}

export default LottoMachine;
