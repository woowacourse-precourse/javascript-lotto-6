import { MissionUtils } from '@woowacourse/mission-utils';

class WinningStatistics {
  static print(lottos, winningLotto) {
    const match = WinningStatistics.#checkMatch(lottos, winningLotto);
    WinningStatistics.#calculateYield(match);
  }

  static #checkMatch(lottos, winningLotto) {
    const match = { 3: 0, 4: 0, 5: 0, bonus: 0, 6: 0 };

    lottos.forEach((lotto) => {
      const count = WinningStatistics.#compareLottoWithWinningLotto(
        lotto,
        winningLotto
      );
      match[count] += 1;
    });

    return match;
  }

  static #compareLottoWithWinningLotto(lotto, winningLotto) {
    let count = 0;
    lotto.forEach((l) => {
      if (winningLotto.numbers.includes(l)) {
        count++;
      }
    });

    if (count === 5 && lotto.includes(winningLotto.bonus)) return 'bonus';
    return count;
  }

  static #calculateYield(match) {
    const prices = {
      3: 5000,
      4: 50000,
      5: 1500000,
      bonus: 30000000,
      6: 200000000,
    };
    let yield = 0;

    for (const { key, number } of Object.entries(match)) {
      yield += prices[key] * number;
    }
  }
}

export default WinningStatistics;
