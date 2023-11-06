import { Random } from '@woowacourse/mission-utils';

import LottoGame from '../src/LottoGame.js';
import Lotto from '../src/Lotto.js';

describe('LottoGame 클래스 테스트', () => {
  test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    const game = new LottoGame();
    game.createLotto(2000);
    const lottos = game.getLottos();

    expect(lottos.length).toBe(2);
  });

  test('로또 번호를 오름차순으로 정렬한다.', () => {
    Random.pickUniqueNumbersInRange = jest.fn();
    Random.pickUniqueNumbersInRange.mockReturnValue([35, 1, 4, 25, 44, 12]);

    const game = new LottoGame();
    game.createLotto(1000);
    const lottos = game.getLottos();

    expect(lottos).toEqual([[1, 4, 12, 25, 35, 44]]);
  });

  describe('구매한 로또와 당첨 번호를 비교한다.', () => {
    test.each([
      {
        test: '1등 1개, 4등 1개, 5등 1개',
        purchasedLotto: [
          new Lotto([1, 2, 3, 4, 5, 6]),
          new Lotto([1, 4, 5, 6, 10, 11]),
          new Lotto([1, 2, 3, 7, 10, 20]),
        ],
        winningLotto: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedResult: [1, 1, 0, 0, 1],
      },
      {
        test: '2등 1개, 5등 1개',
        purchasedLotto: [
          new Lotto([8, 21, 23, 41, 42, 43]),
          new Lotto([3, 5, 11, 16, 32, 36]),
          new Lotto([7, 11, 16, 35, 36, 44]),
          new Lotto([1, 8, 11, 31, 41, 42]),
        ],
        winningLotto: [11, 16, 35, 36, 41, 44],
        bonusNumber: 7,
        expectedResult: [1, 0, 0, 1, 0],
      },
      {
        test: '모두 당첨안됨',
        purchasedLotto: [
          new Lotto([1, 2, 3, 4, 5, 6]),
          new Lotto([1, 2, 3, 4, 5, 7]),
        ],
        winningLotto: [11, 12, 13, 14, 15, 16],
        bonusNumber: 42,
        expectedResult: [0, 0, 0, 0, 0],
      },
    ])(
      '각 등수에 몇 개가 당첨되었는지 확인할 수 있는 결과를 반환한다. ($test)',
      ({ purchasedLotto, winningLotto, bonusNumber, expectedResult }) => {
        const game = new LottoGame();
        const result = game.compareLotto(
          purchasedLotto,
          winningLotto,
          bonusNumber,
        );

        expect(result).toEqual(expectedResult);
      },
    );

    test.each([
      {
        result: [1, 0, 1, 0, 0],
        purchaseAmount: 6000,
        expectedRate: 25083.3,
      },
      {
        result: [0, 1, 0, 0, 0],
        purchaseAmount: 3000,
        expectedRate: 1666.7,
      },
    ])(
      '당첨 수익률을 계산한다.',
      ({ result, purchaseAmount, expectedRate }) => {
        const game = new LottoGame();
        const rate = game.calculateRate(purchaseAmount, result);

        expect(rate).toBe(expectedRate);
      },
    );
  });
});
