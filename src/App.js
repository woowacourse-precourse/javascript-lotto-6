import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import CONSTANT from "./constant/constants";
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
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  calculateAndDisplayProfitRate(purchaseAmount, resultCount) {
    const { LOG, RATE } = CONSTANT;
    let totalPrize = 0;
    for (const result in resultCount) {
      totalPrize += this.getPrizeValue(result) * resultCount[result];
    }

    const profitRate = RATE(totalPrize, purchaseAmount);
    const message = LOG.TOTAL_RATE(profitRate);
    Console.print(message);
  }

  getPrizeValue(match) {
    const { PRIZE_VALUES } = CONSTANT;
    return PRIZE_VALUES[match] || 0;
  }

  async getInputPurchaseAmount() {
    const { LOG, ERR_LOG, UNIT } = CONSTANT;
    const purchaseAmountInput = await Console.readLineAsync(`${LOG.PURCHASE}`);
    if (!/^\d+$/.test(purchaseAmountInput)) {
      throw new Error(`${ERR_LOG.NAN_AMOUNT}`);
    }

    const purchaseAmount = parseInt(purchaseAmountInput, 10);

    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
      throw new Error(`${ERR_LOG.WRONG_PRICE}`);
    }

    if (purchaseAmount % UNIT !== 0) {
      throw new Error(`${ERR_LOG.WRONG_MEASURE}`);
    }

    return purchaseAmount;
  }

  purchaseLottos(purchaseAmount) {
    const { UNIT } = CONSTANT;
    const numberOfLottos = Math.floor(purchaseAmount / UNIT);
    const lottos = Array.from(
      { length: numberOfLottos },
      () => new Lotto(Lotto.generateRandom(), false)
    );
    return lottos;
  }

  displayPurchasedLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const sortedNumbers = lotto.numbers.sort((a, b) => a - b);
      Console.print(`[${sortedNumbers.join(", ")}]`);
    });
  }

  async getInputWinningNumbers() {
    const { LOG, ERR_LOG } = CONSTANT;
    const winningNumbersInput = await Console.readLineAsync(`${LOG.WIN_NUM}`);

    const winningNumbers = winningNumbersInput
      .split(",")
      .map((num) => num.trim())
      .map(Number);

    if (winningNumbers.length !== 6) {
      throw new Error(ERR_LOG.WIN_LENGTH);
    }

    if (winningNumbers.some(isNaN)) {
      throw new Error(ERR_LOG.NAN);
    }

    const bonusNumberInput = await Console.readLineAsync();
    const bonusNumber = Number(bonusNumberInput);

    if (isNaN(bonusNumber)) {
      throw new Error(ERR_LOG.WRONG_BONUS);
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERR_LOG.REPEATED_BONUS);
    }

    return { winningNumbers, bonusNumber };
  }

  calculateResults(lottos, winningNumbers, bonusNumber) {
    const { RESULT_COUNT } = CONSTANT;
    let prize = 0;

    lottos.forEach((lotto) => {
      const {
        matchCount,
        isBonusMatched,
        prize: lottoPrize,
      } = lotto.checkWinning(winningNumbers, bonusNumber);
      prize += lottoPrize;
      const resultKey =
        matchCount === 5 && isBonusMatched ? "5+1" : matchCount.toString();
      if (RESULT_COUNT.hasOwnProperty(resultKey)) {
        RESULT_COUNT[resultKey]++;
      }
    });
    return RESULT_COUNT;
  }

  displayResults(resultCnt) {
    const { WIN_LOG } = CONSTANT;
    Console.print(`${WIN_LOG.MSG}`);
    Console.print(`${WIN_LOG.SLASH}`);
    Object.keys(resultCnt).forEach((match) => {
      const prizeMsg = this.getPrizeMessage(match);
      Console.print(`${prizeMsg} - ${resultCnt[match]}개`);
    });
  }

  getPrizeMessage(match) {
    const { PRIZE_MSG } = CONSTANT;
    return PRIZE_MSG[match];
  }
}

export default App;
