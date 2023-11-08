import Lotto from '../Lotto';
import Winner from './Winner';
import modifiers from '../utils/modifiers.js';

class WinnerMaker {
  #lottos; // 발행한 로또 받기

  #winner;

  constructor(lottos) {
    this.#lottos = lottos;
    this.#winner = new Winner();
  }

  #winningLotto = new Lotto('1,2,3,4,5,6', '7'); // 로또값 입력

  // 일치 개수 확인
  #checkNumbers() {
    const count = modifiers.duplicates(
      this.#lottos,
      this.#winningLotto.getNumbers(),
    );
    return count;
  }

  // 보너스 확인
  #checkBonus() {
    return modifiers.duplicates(this.#lottos, this.#winningLotto.getBonus());
  }

  getWinner() {
    this.#winner.switchNumber(this.#checkNumbers(), this.#checkBonus());
  }
}

export default WinnerMaker;
