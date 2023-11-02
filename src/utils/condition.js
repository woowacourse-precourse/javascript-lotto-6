import { LOTTO_NUMBERS } from "../constants/numbers.js";

export function countMatchingBalls(purchasedLotto, winningBallsArr) {
  const matchingBallsCount = purchasedLotto.map(
    (lotto) => lotto.filter((number) => winningBallsArr.includes(number)).length
  );
  return matchingBallsCount;
}

export function checkBonusBall(purchasedLotto, bonusBall) {
  const bonusBallIsIncluded = purchasedLotto.map((lotto) =>
    lotto.includes(bonusBall)
  );
  return bonusBallIsIncluded;
}
