import { LOTTO_RANK } from '../constants/GameSetting.js';

export function checkLottoResult(createdLottoNumbers, winningLottoNumbers, bonusNumber) {
  const result = [0, 0, 0, 0, 0];
  createdLottoNumbers.forEach((lotto) => {
    const matchCount = lotto.filter((number) => winningLottoNumbers.includes(number)).length;
    const isBouns = lotto.includes(bonusNumber);

    Object.values(LOTTO_RANK).forEach((rank, index) => {
      if (matchCount === rank.winningNumber && isBouns === rank.bounsNumber) {
        result[index]++;
      }
    });
  });

  return result;
}
