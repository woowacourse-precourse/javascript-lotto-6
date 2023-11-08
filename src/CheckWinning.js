import { LOTTO_MATCH } from "./constant/LottoInfo.js";

let lottoWinningRank = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

function CheckWinning(lottoNumbers, winningNumber, bonus) {
  lottoNumbers.forEach((lotto) => {
    let sameCount = compareList(winningNumber.getNumbers(), lotto.getNumbers());
    checkLottoWinningRank(sameCount, bonus, lotto.getNumbers());
  });
  return lottoWinningRank;
}

function checkLottoWinningRank(sameCount, bonus, lotto) {
  for (let rank of Object.keys(LOTTO_MATCH)) {
    if (sameCount === LOTTO_MATCH[rank].matchCount) {
      if (LOTTO_MATCH[rank].bonus) {
        if (compareNumber(lotto, bonus)) {
          lottoWinningRank["second"]++;
          return;
        }
        lottoWinningRank["third"]++;
        return;
      }
      lottoWinningRank[rank]++;
      return;
    }
  }
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
