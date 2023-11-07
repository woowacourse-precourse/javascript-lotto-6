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
  countMatchArr.forEach((matchCount, index) => {
    caseOfWinning(matchCount, checkBonusArr[index], rankCounts);
  });
  return rankCounts;
}

export function caseOfWinning(matchCount, hasBonus, rankCounts) {
  switch (matchCount) {
    case 3:
      rankCounts[5] += 1; // 3개 일치는 5등
      break;
    case 4:
      rankCounts[4] += 1; // 4개 일치는 4등
      break;
    case 5:
      checkBonusBallIsMatching(hasBonus, rankCounts);
      break;
    case 6:
      rankCounts[1] += 1; // 6개 일치는 1등
      break;
  }
}

export function checkBonusBallIsMatching(hasBonus, rankCounts) {
  // 짧은 회로를 통해 hasBonus가 참일 경우 rankCounts[2], 거짓일 경우 rankCounts[3] 값 증가
  // 배열의 특성 상 return없이 직접 수정되는 효과 보유
  rankCounts[hasBonus ? 2 : 3] += 1;
}
