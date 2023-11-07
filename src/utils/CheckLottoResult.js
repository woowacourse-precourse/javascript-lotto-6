import { LOTTO_RANK } from '../constants/GameSetting.js';

export function checkLottoResult(createdLottoNumbers, winningLottoNumbers, bonusNumber) {
  const result = [0, 0, 0, 0, 0];
  createdLottoNumbers.forEach((lotto) => {
    const matchCount = lotto.filter((number) => winningLottoNumbers.includes(number)).length;
    const isBouns = lotto.includes(bonusNumber);

    if (matchCount === LOTTO_RANK.SECOND.winningNumber) {
      updateSecondOrThirdResult(isBouns, result);
    } else {
      updateNormalResults(matchCount, result);
    }
  });
  return result;
}

function updateNormalResults(matchCount, result) {
  Object.values(LOTTO_RANK).forEach((rank, index) => {
    if (matchCount === rank.winningNumber) {
      result[index]++;
    }
  });
}

function updateSecondOrThirdResult(isBouns, result) {
  const secondIndex = Object.keys(LOTTO_RANK).indexOf('SECOND');
  const thirdIndex = Object.keys(LOTTO_RANK).indexOf('THIRD');

  return isBouns ? result[secondIndex]++ : result[thirdIndex]++;
}
