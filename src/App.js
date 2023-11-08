import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.lottoList = [];
  }

  async play() {
    const purchaseAmount = await this.inputPurchaseAmount();
    const numberOfLottos = this.calculateNumberOfLottos(purchaseAmount);
    MissionUtils.Console.print(`${numberOfLottos}개를 구매했습니다.`);

    this.purchaseLottos(numberOfLottos);
    this.printPurchasedLottos(numberOfLottos);

    const { winningNumbers, bonusNumber } =
      await this.inputWinningNumbersAndBonus();

    const result = this.calculateResults(winningNumbers, bonusNumber);
    this.printResults(result);
  }

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
      const lottoNumbers = JSON.stringify(
        lotto.getNumbers().sort((a, b) => a - b)
      );
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

  printResults(results) {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");

    const order = ["3", "4", "5", "5b", "6"];

    for (const key of order) {
      const prize = this.getPrize(key);
      const prizeAmount = this.getPrizeAmount(key);
      MissionUtils.Console.print(
        `${prize} (${prizeAmount}원) - ${results[key]}개`
      );
    }

    const totalProfit = this.calculateTotalProfit(results);
    MissionUtils.Console.print(`총 수익률은 ${totalProfit}%입니다.`);
  }

  getPrize(key) {
    const prizeMap = {
      3: "3개 일치",
      4: "4개 일치",
      5: "5개 일치",
      "5b": "5개 일치, 보너스 볼 일치",
      6: "6개 일치",
    };
    return prizeMap[key];
  }

  getPrizeAmount(key) {
    const prizeAmountMap = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5b": 30000000,
      6: 2000000000,
    };
    return prizeAmountMap[key];
  }

  calculateTotalProfit(results) {
    const totalProfit = Object.keys(results).reduce((acc, key) => {
      const prizeAmount = this.getPrizeAmount(key);
      const count = results[key];
      return acc + prizeAmount * count;
    }, 0);
    const purchaseAmount = this.lottoList.length * 1000;
    const profitPercentage =
      ((totalProfit - purchaseAmount) / purchaseAmount + 1) * 100;
    return profitPercentage.toFixed(1);
  }
}

export default App;
