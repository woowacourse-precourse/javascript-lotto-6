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
      // winnerList = this.countWinner(lottoNumber, winningLotto);
    });
    return winnerList;
  }
}
export default WinningJudge;
