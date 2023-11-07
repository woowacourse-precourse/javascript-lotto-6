import { CORRECT_NUMBER } from './constant';
import { getWinningResult } from './utils';

class Checker {
  #winningLottoNumbers;
  #bonusNumber;
  #userLottos;

  constructor(winningLotto, bonusBall, userLottos) {
    this.#winningLottoNumbers = winningLotto.getLottoNumbers();
    this.#bonusNumber = bonusBall.getNumber();
    this.#userLottos = userLottos;
  }

  changeToRank(number, bonus) {
    if (number < 3) return;
    switch (number) {
      case 3:
        return CORRECT_NUMBER.three;
      case 4:
        return CORRECT_NUMBER.four;
      case 5:
        return bonus ? CORRECT_NUMBER.fiveAndBonus : CORRECT_NUMBER.fiveNoBonus;
      case 6:
        return CORRECT_NUMBER.six;
      default:
        break;
    }
  }

  compareLotto(lotto, winningLottoNumbers, bonusNumber) {
    const lottoNumbers = lotto.getLottoNumbers();
    let numberOfCorrect = 0;
    let bonus = false;
    lottoNumbers.forEach((v) => {
      if (winningLottoNumbers.includes(v)) numberOfCorrect += 1;
      if (v === bonusNumber) bonus = true;
    });
    return this.changeToRank(numberOfCorrect, bonus);
  }

  // {rank: , number:}[] 반환
  calculateWinningResult() {
    const rankArray = this.#userLottos.map((v) =>
      this.compareLotto(v, this.#winningLottoNumbers, this.#bonusNumber),
    );
    return getWinningResult(rankArray);
  }
}

export default Checker;
