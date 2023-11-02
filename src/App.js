import { Console } from "@woowacourse/mission-utils";
import InputManager from "./functions/InputManager.js";
import { devideMoneyForLotto, profitRate } from "./utils/caculate.js";
import { generateUniqueRandomNumbers } from "./utils/random.js";
import { sortNumbers } from "./utils/sort.js";
import { EMPTY_LINE, STATISTICS_MESSAGE } from "./constants/messages.js";
import { devideIntoCommas } from "./utils/conversion.js";
import { checkBonusBall, countMatchingBalls } from "./utils/condition.js";
import { LOTTO_NUMBERS, WINNING_PRIZE_NUMBERS } from "./constants/numbers.js";

class App {
  constructor() {
    this.inputManager = new InputManager();
  }

  async play() {
    const moneyForLotto = await this.inputManager.moneyForLotto();
    const numbersOfLotto = devideMoneyForLotto(Number(moneyForLotto));

    let purchasedLotto = [];
    for (let i = 0; i < Number(numbersOfLotto); i++) {
      let newLottoNumbers = sortNumbers(generateUniqueRandomNumbers());
      Console.print(newLottoNumbers);
      purchasedLotto.push(newLottoNumbers);
    }
    Console.print(EMPTY_LINE);

    const winningBalls = await this.inputManager.winningBallNumbers();
    const winningBallsArr = devideIntoCommas(winningBalls).map(Number);
    const bonusBall = await this.inputManager.bonusBallNumbers();

    Console.print(countMatchingBalls(purchasedLotto, winningBallsArr));
    Console.print(checkBonusBall(purchasedLotto, Number(bonusBall)));

    // +1을 해서 1등~N등까지 그대로 적용할 수 있도록 하기(시작값 = 0)
    let rankCounts = Array.from({ length: LOTTO_NUMBERS.ranks + 1 }, () => 0);
    const winningPrizeSum =
      rankCounts[1] * WINNING_PRIZE_NUMBERS.rank1 +
      rankCounts[2] * WINNING_PRIZE_NUMBERS.rank2 +
      rankCounts[3] * WINNING_PRIZE_NUMBERS.rank3 +
      rankCounts[4] * WINNING_PRIZE_NUMBERS.rank4 +
      rankCounts[5] * WINNING_PRIZE_NUMBERS.rank5;

    const earnRate = profitRate(moneyForLotto, winningPrizeSum);

    Console.print(STATISTICS_MESSAGE.winningStatistics);
    Console.print(STATISTICS_MESSAGE.devideLine);
    Console.print(
      `${STATISTICS_MESSAGE.rank5}${rankCounts[5]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank4}${rankCounts[4]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank3}${rankCounts[3]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank2}${rankCounts[2]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank1}${rankCounts[1]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.finalReturn}${earnRate}${STATISTICS_MESSAGE.finalReturnAfter}`
    );
  }
}

export default App;
