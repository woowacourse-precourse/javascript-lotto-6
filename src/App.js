import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    try {
      const purchaseAmount = await this.getInputPurchaseAmount();
      const lottos = this.purchaseLottos(purchaseAmount);
      this.displayPurchasedLottos(lottos);

      const { winningNumbers, bonusNumber } =
        await this.getInputWinningNumbers();
      const resultCount = this.calculateResults(
        lottos,
        winningNumbers,
        bonusNumber
      );
      this.displayResults(resultCount);

      this.calculateAndDisplayProfitRate(purchaseAmount, resultCount);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  calculateAndDisplayProfitRate(purchaseAmount, resultCount) {
    let totalPrize = 0;
    for (const result in resultCount) {
      totalPrize += this.getPrizeValue(result) * resultCount[result];
    }

    // 수익률 계산
    const profit = totalPrize - purchaseAmount;
    const profitRate = (profit / purchaseAmount) * 100;

    // 수익률 출력
    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  getPrizeValue(match) {
    const prizeValues = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+1": 30000000,
      6: 2000000000,
    };

    return prizeValues[match] || 0;
  }

  async getInputPurchaseAmount() {
    const purchaseAmountInput = await MissionUtils.Console.readLineAsync(
      "구입 금액을 입력해 주세요."
    );
    if (!/^\d+$/.test(purchaseAmountInput)) {
      throw new Error("[ERROR] 구입 금액을 다시 확인하십시오.");
    }

    const purchaseAmount = parseInt(purchaseAmountInput, 10);

    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
      throw new Error("[ERROR] 올바른 금액을 입력십시오.");
    }

    if (purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }

    return purchaseAmount;
  }

  purchaseLottos(purchaseAmount) {
    const numberOfLottos = Math.floor(purchaseAmount / 1000);
    const lottos = Array.from(
      { length: numberOfLottos },
      () => new Lotto(Lotto.generateRandom(), false)
    ); // Lotto 클래스의 생성자 수정 필요
    return lottos;
  }

  displayPurchasedLottos(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`); // 번호의 순서를 유지합니다.
    });
  }

  async getInputWinningNumbers() {
    const winningNumbersInput = await MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요."
    );

    const winningNumbers = this.parseNumbers(winningNumbersInput);

    if (winningNumbers.length !== 6) {
      throw new Error("당첨 번호는 6개여야 합니다.");
    }

    const bonusNumberInput = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    const bonusNumber = parseInt(bonusNumberInput, 10);
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호가 올바르지 않습니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    return { winningNumbers, bonusNumber };
  }

  parseNumbers(numbersInput) {
    return numbersInput.split(",").map((num) => {
      const parsedNum = parseInt(num.trim(), 10);
      if (isNaN(parsedNum)) {
        throw new Error("번호가 올바르지 않습니다.");
      }
      return parsedNum;
    });
  }

  calculateResults(lottos, winningNumbers, bonusNumber) {
    let prize = 0;
    const resultCount = { 3: 0, 4: 0, 5: 0, "5+1": 0, 6: 0 };

    lottos.forEach((lotto) => {
      const {
        matchCount,
        isBonusMatched,
        prize: lottoPrize,
      } = lotto.checkWinning(winningNumbers, bonusNumber);
      prize += lottoPrize;
      const resultKey =
        matchCount === 5 && isBonusMatched ? "5+1" : matchCount.toString();
      if (resultCount.hasOwnProperty(resultKey)) {
        resultCount[resultKey]++;
      }
    });

    return resultCount;
  }

  displayResults(resultCount) {
    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    // 0개 이상인 결과만 출력합니다.
    Object.keys(resultCount).forEach((match) => {
      const prizeMessage = this.getPrizeMessage(match);
      MissionUtils.Console.print(`${prizeMessage} - ${resultCount[match]}개`);
    });
  }

  getPrizeMessage(match) {
    const prizeMessages = {
      3: "3개 일치 (5,000원)",
      4: "4개 일치 (50,000원)",
      5: "5개 일치 (1,500,000원)",
      "5+1": "5개 일치, 보너스 볼 일치 (30,000,000원)",
      6: "6개 일치 (2,000,000,000원)",
    };
    return prizeMessages[match];
  }
}

export default App;
