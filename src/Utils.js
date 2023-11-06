import { Random } from "@woowacourse/mission-utils";

const Utils = {
  genRandomLottoNumber: () =>
    Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (numb1, numb2) => numb1 - numb2
    ),
  splitInput: (input) => input.split(",").filter((element) => element !== ""),
  rankLotto: (winningMatch, bonusMatch) =>
    winningMatch === 6
      ? 4
      : winningMatch === 5 && bonusMatch === 1
      ? 3
      : winningMatch === 5
      ? 2
      : winningMatch === 4
      ? 1
      : winningMatch === 3
      ? 0
      : "",
  calculateProfit: (lotteryResults, purchasedCount) =>
    (
      ((lotteryResults[0] * 5000 +
        lotteryResults[1] * 50000 +
        lotteryResults[2] * 1500000 +
        lotteryResults[3] * 30000000 +
        lotteryResults[4] * 2000000000) /
        (purchasedCount * 1000)) *
      100
    ).toFixed(1),
};

export default Utils;
