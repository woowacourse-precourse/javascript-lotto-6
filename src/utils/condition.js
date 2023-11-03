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

export function recordRanks(countMatchArr, checkBonusArr) {
  let rankCounts = Array.from({ length: LOTTO_NUMBERS.ranks + 1 }, () => 0);
  for (let i = 0; i < countMatchArr.length; i += 1) {
    switch (countMatchArr[i]) {
      case 3:
        rankCounts[5] += 1; // 3개 일치는 5등
        break;
      case 4:
        rankCounts[4] += 1; // 4개 일치는 4등
        break;
      case 5:
        if (checkBonusArr[i]) {
          rankCounts[2] += 1; // 5개 일치하고 보너스 볼이 일치하면 2등
        } else {
          rankCounts[3] += 1; // 5개 일치만 되어도 3등
        }
        break;
      case 6:
        rankCounts[1] += 1; // 6개 일치는 1등
        break;
      // 다른 경우에는 아무것도 하지 않습니다.
    }
  }
  return rankCounts;
}
