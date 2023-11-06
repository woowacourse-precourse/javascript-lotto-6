import { getRankingBymatch } from '../utils/calc';

export class WinningNumber {
  #winning;
  #bonus;
  constructor(winninglotto, bonus) {
    this.#winning = winninglotto;
    this.#bonus = bonus;
  }

  CompareByone = (lotto) => {
    const bonus = parseInt(this.#bonus);
    return getRankingBymatch(
      lotto.matchCounter(this.#winning),
      lotto.matchBonus(bonus),
    );
  };
}
