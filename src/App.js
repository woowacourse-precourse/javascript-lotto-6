import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "./Input";
import Lotto from "./Lotto";

class App {
  async play() {
    const userInput = new Input();
    userInput.read;
  }

  static getRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  static getLottoWithMoney(money) {
    const LOTTO_PIRCE = 1000;
    const NUMBER_OF_LOTTO = Math.floor(money / LOTTO_PIRCE);
    return Array.from(
      { length: NUMBER_OF_LOTTO },
      () => new Lotto(this.getRandomSixNumbers())
    );
  }

  static calculLottoResult({ lottos, winNumbers, bonusNumber }) {
    const LOTTO_RANKS = Array.from({ length: 5 }, () => 0);
    lottos.forEach((lotto) => {
      const RANK = lotto.getLottoResult({ winNumbers, bonusNumber });
      if (RANK < 6) LOTTO_RANKS[RANK - 1] += 1;
    });
    return LOTTO_RANKS;
  }

  static printLottoResult(lottoRanks) {
    const PRINT_STRING = `3개 일치 (5,000원) - ${lottoRanks[4]}개
4개 일치 (50,000원) - ${lottoRanks[3]}개
5개 일치 (1,500,000원) - ${lottoRanks[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanks[1]}개
6개 일치 (2,000,000,000원) - ${lottoRanks[0]}개`;
    MissionUtils.Console.print(PRINT_STRING);
  }

  static printRateOfIncome(lottoRanks, amountOfMoney) {
    const RANK_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];
    let income = 0;
    lottoRanks.forEach((number, rank) => {
      income += number * RANK_MONEY[rank];
    });
    MissionUtils.Console.print(
      `총 수익률은 ${
        Math.round((income / amountOfMoney) * 10000) / 100
      }%입니다.`
    );
  }
}

export default App;
