import Lotto from '../Lotto.js';
import Winner from '../models/Winner.js';
import modifiers from '../utils/modifiers.js';

class WinnerMaker {
  #lottos; // 발행한 로또 받기

  #winner;

  #winningLotto;

  constructor(lottos, numbers, bonus) {
    this.#lottos = lottos;
    this.#winner = new Winner();
    this.#winningLotto = new Lotto(numbers, bonus);
  }

  // #winningLotto = new Lotto('1,2,3,4,5,12', '7'); // 로또값 입력

  // 일치 개수 확인
  #checkNumbers(lotto) {
    const duplicateNumber = modifiers.getDuplicates(
      lotto,
      this.#winningLotto.getNumbers(),
    );
    return duplicateNumber.length;
  }

  // 보너스 확인
  #checkBonus(lotto) {
    return modifiers.isDuplicate(lotto, this.#winningLotto.getBonus());
  }

  // 등수 저장
  #getWinner() {
    this.#lottos.forEach((lotto) =>
      this.#winner.switchNumber(
        this.#checkNumbers(lotto),
        this.#checkBonus(lotto),
      ),
    );
  }

  getResult() {
    this.#getWinner();
    const result = this.#winner.getResult();
    const revenue = this.#winner.getRevenue();
    return { result, revenue };
  }
}

export default WinnerMaker;

// const winnerMaker = new WinnerMaker(
//   [
//     [1, 2, 3, 4, 39, 44],
//     [1, 2, 3, 0, 4, 5],
//   ],
//   '1,2,3,0,39,6',
//   '7',
// );
// console.log(winnerMaker.checkNumbers([3, 1, 17, 30, 43, 45]));
