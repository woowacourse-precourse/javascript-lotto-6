/* eslint-disable max-lines-per-function */

import LottoWinResult from '../src/domain/LottoWinResult';
import Lotto from '../src/domain/Lotto';
import WinningLotto from '../src/domain/WinningLotto';

describe('WinningLotto 도메인 로직 테스트', () => {
  test('사용자가 발행한 로또에 대해 당첨 로또가 몇 장인지 계산할 수 있다.', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 6개 일치 (당첨)
      new Lotto([1, 2, 3, 4, 5, 10]), // 5개 일치 + 보너스 (당첨)
      new Lotto([1, 2, 3, 4, 5, 18]), // 5개 일치 (당첨)
      new Lotto([1, 2, 21, 22, 23, 24]), // 2개 일치
      new Lotto([1, 26, 27, 28, 29, 30]), // 1개 일치
    ];

    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 10);

    const lottoWinResult = new LottoWinResult(winningLotto);

    const result = [1, 1, 1, 0, 0];

    const prizeCounts = lottoWinResult.countPrizes(lottos);

    expect(prizeCounts.map(({ cnt }) => cnt)).toEqual(result);
  });
});
