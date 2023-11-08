import Lotto from '../Lotto.js';
import Winner from '../models/Winner.js';
import modifiers from '../utils/modifiers.js';

class WinnerMaker {
  #lottos;

  #winner;

  #winningLotto;

  constructor(lottos, numbers, bonus) {
    this.#lottos = lottos;
    this.#winner = new Winner();
    this.#winningLotto = new Lotto(numbers, bonus);
  }

  #checkNumbers(lotto) {
    const duplicateNumber = modifiers.getDuplicates(
      lotto,
      this.#winningLotto.getNumbers(),
    );
    return duplicateNumber.length;
  }

  #checkBonus(lotto) {
    return modifiers.isDuplicate(lotto, this.#winningLotto.getBonus());
  }

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
