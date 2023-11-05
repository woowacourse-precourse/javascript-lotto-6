import { FIVE_AND_BONUS, RANK } from './constant';
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
    if (number === 5) {
      return bonus ? FIVE_AND_BONUS : RANK[2];
    }
    if (number < 5) {
      return RANK[number - 3];
    }
    if (number === 6) return RANK[4];
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
