import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "./Input";
import Lotto from "./Lotto";

class App {
  constructor() {
    this.userInput = new Input();
  }

  async play() {
    await this.userInput.handleMoney();
    this.Lottos = this.getLottoWithMoney(this.userInput.money);
    await this.userInput.handleLottoNumbers();
    await this.userInput.handleBonusNumber();

    const LOTTO_RANKS = this.calculLottoResult({
      lottos: this.Lottos,
      winNumbers: this.userInput.lottoNumbers,
      bonusNumber: this.userInput.bonusNumber,
    });
    this.printLottoResult(LOTTO_RANKS);
    this.printRateOfIncome(LOTTO_RANKS, this.userInput.money);
  }

  getRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  getLottoWithMoney(money) {
    const LOTTO_PIRCE = 1000;
    const NUMBER_OF_LOTTO = Math.floor(money / LOTTO_PIRCE);
    MissionUtils.Console.print(`${NUMBER_OF_LOTTO}개를 구매했습니다.`);

    return Array.from({ length: NUMBER_OF_LOTTO }, () => {
      const RANDOM_NUMBERS = this.getRandomSixNumbers();
      MissionUtils.Console.print(`[${RANDOM_NUMBERS.join(", ")}]`);
      return new Lotto(RANDOM_NUMBERS);
    });
  }

  calculLottoResult({ lottos, winNumbers, bonusNumber }) {
    const LOTTO_RANKS = Array.from({ length: 5 }, () => 0);
    lottos.forEach((lotto) => {
      const RANK = lotto.getLottoResult({ winNumbers, bonusNumber });
      if (RANK < 6) LOTTO_RANKS[RANK - 1] += 1;
    });
    return LOTTO_RANKS;
  }

  printLottoResult(lottoRanks) {
    MissionUtils.Console.print(`당첨 통계\n---`);
    const PRINT_STRING = `3개 일치 (5,000원) - ${lottoRanks[4]}개
4개 일치 (50,000원) - ${lottoRanks[3]}개
5개 일치 (1,500,000원) - ${lottoRanks[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanks[1]}개
6개 일치 (2,000,000,000원) - ${lottoRanks[0]}개`;
    MissionUtils.Console.print(PRINT_STRING);
  }

  printRateOfIncome(lottoRanks, amountOfMoney) {
    const RANK_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];
    let income = 0;
    lottoRanks.forEach((number, rank) => {
      income += number * RANK_MONEY[rank];
    });
    MissionUtils.Console.print(
      `총 수익률은 ${Math.round((income / amountOfMoney) * 1000) / 10}%입니다.`
    );
  }
}

export default App;
