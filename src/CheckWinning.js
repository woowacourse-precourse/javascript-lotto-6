import { MissionUtils } from "@woowacourse/mission-utils";

let lottoWinningRank = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
const CHECK_BONUS = {
  6: "first",
  5: ["second", "third"],
  4: "fourth",
  3: "fifth",
};

const CHECK_BONUS_COUNT = 5;
const WINNING_COUNT_MIN = 3;

function CheckWinning(lottoNumbers, winningNumber, bonus) {
  lottoNumbers.forEach((lotto) => {
    let sameCount = compareList(winningNumber.getNumbers(), lotto.getNumbers());
    checkLottoWinningRank(sameCount, bonus, lotto.getNumbers());
  });
  return lottoWinningRank;
}

function checkLottoWinningRank(sameCount, bonus, lotto) {
  let sameCountStr = sameCount.toString();
  if (sameCount >= WINNING_COUNT_MIN) {
    if (sameCount === CHECK_BONUS_COUNT) {
      lottoWinningRank[checkNumber(lotto, bonus)]++;
      return;
    }
    lottoWinningRank[CHECK_BONUS[sameCountStr]]++;
  }
}

function checkNumber(lotto, bonus) {
  if (compareNumber(lotto, bonus)) {
    return CHECK_BONUS[CHECK_BONUS_COUNT][0];
  }
  return CHECK_BONUS[CHECK_BONUS_COUNT][1];
}

function compareList(winning, lotto) {
  let sameCount = 0;
  lotto.forEach((num) => {
    if (winning.includes(num)) {
      sameCount++;
    }
  });
  return sameCount;
}

function compareNumber(lotto, bonus) {
  return lotto.includes(bonus);
}

export default CheckWinning;
