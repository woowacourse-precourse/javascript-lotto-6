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
  for (let index = 0; index < countMatchArr.length; index += 1) {
    caseOfWinning(index, countMatchArr, checkBonusArr, rankCounts);
  }
  return rankCounts;
}

export function caseOfWinning(index, countMatchArr, checkBonusArr, rankCounts) {
  switch (countMatchArr[index]) {
    case 3:
      rankCounts[5] += 1; // 3개 일치는 5등
      break;
    case 4:
      rankCounts[4] += 1; // 4개 일치는 4등
      break;
    case 5:
      checkBonusBallIsMatching(index, checkBonusArr, rankCounts);
      break;
    case 6:
      rankCounts[1] += 1; // 6개 일치는 1등
      break;
  }
}

export function checkBonusBallIsMatching(index, checkBonusArr, rankCounts) {
  if (checkBonusArr[index]) {
    rankCounts[2] += 1; // 5개 일치하고 보너스 볼이 일치하면 2등
  } else {
    rankCounts[3] += 1; // 5개 일치만 되어도 3등
  }
}
