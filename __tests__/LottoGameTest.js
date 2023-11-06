import { Random } from '@woowacourse/mission-utils';

import LottoGame from '../src/LottoGame.js';
import Lotto from '../src/Lotto.js';
import { validatePurchaseAmount } from '../src/utils/validate.js';
import { ERROR_MESSAGE } from '../src/constants/messages.js';

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
    test('당첨된 로또와 비교해 각 등수에 몇 개가 당첨되었는지 확인할 수 있는 결과를 반환한다.', () => {
      const PURCHASED_LOTTO = [
        new Lotto([1, 2, 3, 4, 5, 6]),
        new Lotto([1, 2, 3, 10, 20, 7]),
      ];
      const WINNING_LOTTO = [1, 2, 3, 10, 20, 35];
      const BONUS_NUMBER = 7;
      const game = new LottoGame();
      const result = game.compareLotto(
        PURCHASED_LOTTO,
        WINNING_LOTTO,
        BONUS_NUMBER,
      );

      expect(result).toEqual([1, 0, 0, 1, 0]);
    });

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

describe('구입 금액 검증 테스트', () => {
  test('로또 구입 금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      validatePurchaseAmount('1001');
    }).toThrow(ERROR_MESSAGE.invalidUnit);
  });

  test('구입 금액에 숫자가 아닌 값이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      validatePurchaseAmount('a');
    }).toThrow(ERROR_MESSAGE.invalidType);
  });

  test('구입 금액이 1,000원 미만이면 예외가 발생한다.', () => {
    expect(() => {
      validatePurchaseAmount('0');
    }).toThrow(ERROR_MESSAGE.invalidAmount);
  });
});
