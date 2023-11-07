import { Random } from '@woowacourse/mission-utils';
import LottoStore from '../../src/model/LottoStore.js';

describe('LottoStore 모델 테스트', () => {
  test('인스턴스 테스트', () => {
    const purchaseAmount = 8000;
    const lottoStore = new LottoStore(purchaseAmount);
    expect(lottoStore).toBeInstanceOf(LottoStore);
  });

  test('1,000원으로 나누어 떨어지지 않는 구입금액 입력', () => {
    const purchaseAmount = 8001;
    expect(() => new LottoStore(purchaseAmount)).toThrow('[ERROR]');
  });

  test('숫자가 아닌 구입금액 입력', () => {
    const purchaseAmount = '8000j';
    expect(() => new LottoStore(purchaseAmount)).toThrow('[ERROR]');
  });

  test('10만을 초과하는 구입금액을 입력', () => {
    const purchaseAmount = 110000;
    expect(() => new LottoStore(purchaseAmount)).toThrow('[ERROR]');
  });

  test('유효한 구입금액 입력', () => {
    const purchaseAmount = 5000;
    expect(() => new LottoStore(purchaseAmount)).not.toThrow();
  });

  test('getUserLottos() 메소드 테스트', () => {
    Random.pickUniqueNumbersInRange = jest.fn();
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);

    const purchaseAmount = 2000;
    const userLottos = new LottoStore(purchaseAmount).getUserLottos();

    expect(userLottos).toHaveLength(2);
    userLottos.forEach(lotto => expect(lotto).toEqual([1, 2, 3, 4, 5, 6]));
  });

  test('getUserLottos() 반환 값 타입 테스트', () => {
    const purchaseAmount = 1000;
    const userLottos = new LottoStore(purchaseAmount).getUserLottos();

    userLottos.forEach(userLotto =>
      userLotto.forEach(number => expect(typeof number).toBe('number')),
    );
  });
});
