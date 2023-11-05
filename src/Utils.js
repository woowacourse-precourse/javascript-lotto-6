import { Random } from "@woowacourse/mission-utils";

const Utils = {
  genRandomLottoNumber: () =>
    Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (numb1, numb2) => numb1 - numb2
    ),
  splitInput: (input) => input.split(",").filter((element) => element !== ""),
  rankLotto: (winningMatch, bonusMatch) => {
    const rank =
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
        : "";
    return rank;
  },
};

export default Utils;
