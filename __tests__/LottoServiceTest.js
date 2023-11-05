import { PRIZE } from '../src/constants/constants.js';
import Lotto from '../src/Lotto.js';

describe('LottoService', () => {
  const prizeMap = new Map([
    [PRIZE.fifth.name, 0],
    [PRIZE.fourth.name, 0],
    [PRIZE.third.name, 0],
    [PRIZE.second.name, 0],
    [PRIZE.first.name, 0],
  ]);

  function countPrize(prize) {
    if (prize === undefined) return;
    prizeMap.set(prize, prizeMap.get(prize) + 1);
  }

  test('당첨 번호와 보너스 번호를 입력하면, 등수별 당첨 개수를 계산한다.', () => {
    const lottos = [
      [1, 2, 3, 8, 9, 10],
      [3, 4, 5, 6, 7, 8],
    ];
    const winningNumbers = [3, 4, 5, 6, 8, 9];
    const bonusNumber = 7;

    lottos.map(numbers => {
      return countPrize(
        new Lotto(numbers).checkPrize(winningNumbers, bonusNumber),
      );
    });

    expect(prizeMap.get(PRIZE.fifth.name)).toBe(1);
    expect(prizeMap.get(PRIZE.second.name)).toBe(1);
  });
});
