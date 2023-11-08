import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.lottoList = [];
  }

  async play() {}

  async inputPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await MissionUtils.Console.readLineAsync(
          "로또 구입 금액을 입력해 주세요."
        );
        if (this.isValidPurchaseAmount(purchaseAmount)) {
          return parseInt(purchaseAmount, 10);
        }
        throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  isValidPurchaseAmount(amount) {
    return !isNaN(amount) && parseInt(amount, 10) % 1000 === 0;
  }

  calculateNumberOfLottos(purchaseAmount) {
    return purchaseAmount / 1000;
  }

  generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  purchaseLottos(numberOfLottos) {
    for (let i = 0; i < numberOfLottos; i++) {
      this.lottoList.push(new Lotto(this.generateLottoNumbers()));
    }
  }

  printPurchasedLottos() {
    this.lottoList.forEach((lotto) => {
      const lottoNumbers = JSON.stringify(lotto.getNumbers());
      MissionUtils.Console.print(lottoNumbers);
    });
  }

  async inputWinningNumbersAndBonus() {
    const winningNumbers = (
      await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.")
    )
      .split(",")
      .map(Number);
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    return { winningNumbers, bonusNumber };
  }

  calculateResults(winningNumbers, bonusNumber) {
    const results = {
      3: 0,
      4: 0,
      5: 0,
      "5b": 0,
      6: 0,
    };

    this.lottoList.forEach((lotto) => {
      const matchingNumbers = lotto.getMatchingNumbers(winningNumbers);
      const isBonusMatch = lotto.isBonusMatch(bonusNumber);

      if (matchingNumbers === 6) {
        results["6"]++;
      } else if (matchingNumbers === 5 && isBonusMatch) {
        results["5b"]++;
      } else if (matchingNumbers === 5) {
        results["5"]++;
      } else if (matchingNumbers === 4) {
        results["4"]++;
      } else if (matchingNumbers === 3) {
        results["3"]++;
      }
    });

    return results;
  }
}

export default App;
