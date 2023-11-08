import Lotto from './Lotto.js';
import WinningLotto from './WinningLotto.js';

class WinningJudge {
  #winner = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };

  getWinnerList() {
    return this.#winner;
  }

  calculateWinner({ lottoList, winningLotto }) {
    let winnerList;
    lottoList.forEach((lotto) => {
      const lottoNumber = lotto.getNumber();
      winnerList = this.countWinner(lottoNumber, winningLotto);
    });
    return winnerList;
  }

  countWinner(lottoNumber, winningLotto) {
    const winningLottoNumber = winningLotto.getNumber();
    const bonusNumber = winningLotto.getBonusNumber();
    const matchingNumbers = winningLottoNumber.filter((number) => lottoNumber.includes(number));
    const matchingCount = matchingNumbers.length;
    const isBonusNumberIncluded = lottoNumber.includes(bonusNumber);

    if (matchingCount === 6) this.#winner.first += 1;
    if (matchingCount === 5 && isBonusNumberIncluded) this.#winner.second += 1;
    if (matchingCount === 5 && !isBonusNumberIncluded) this.#winner.third += 1;
    if (matchingCount === 4) this.#winner.fourth += 1;
    if (matchingCount === 3) this.#winner.fifth += 1;

    return this.#winner;
  }
}
export default WinningJudge;
