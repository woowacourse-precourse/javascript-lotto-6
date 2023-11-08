import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  #lottos;

  #winningLotto;

  #bonus;

  static RANKING = {
    PLACE_1ST: '6',
    PLACE_2ND: '5-b',
    PLACE_3RD: '5',
    PLACE_4TH: '4',
    PLACE_5TH: '3',
  };

  static RANKING_MONEY = {
    [this.RANKING.PLACE_1ST]: 2000000000,
    [this.RANKING.PLACE_2ND]: 30000000,
    [this.RANKING.PLACE_3RD]: 1500000,
    [this.RANKING.PLACE_4TH]: 50000,
    [this.RANKING.PLACE_5TH]: 5000,
  };

  static getRandomLottos(count) {
    const lottos = Array.from({ length: count }, () => {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      Console.print(`[${lotto.join(', ')}]`);
      return lotto;
    });
    return lottos;
  }

  constructor(lottos, winningLotto, bonus) {
    this.#lottos = lottos;
    this.#winningLotto = winningLotto;
    this.#bonus = bonus;
  }

  getLottoPrizes() {
    const lottoPrizes = Object.fromEntries(Object.values(LottoGame.RANKING).map((n) => [n, 0]));

    this.#lottos.forEach((lotto) => {
      let lottoMatch = lotto.compare(this.#winningLotto);
      if (lottoMatch < LottoGame.RANKING.PLACE_5TH) return;
      if (lottoMatch === LottoGame.RANKING.PLACE_3RD && lotto.includes(this.#bonus)) {
        lottoMatch = LottoGame.RANKING.PLACE_2ND;
      }
      lottoPrizes[lottoMatch] += 1;
    });

    const lottoPrizeMoney = this.getPrizeMoney(lottoPrizes);
    return { lottoPrizes, lottoPrizeMoney };
  }

  getPrizeMoney(lottoPrizes) {
    return Object.entries(lottoPrizes).reduce(
      (acc, [key, count]) => acc + LottoGame.RANKING_MONEY[key] * count,
      0,
    );
  }
}

export default LottoGame;
