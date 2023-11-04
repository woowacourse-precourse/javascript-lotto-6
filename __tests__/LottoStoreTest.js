import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constants/messages.js';
import LottoStore from '../src/model/LottoStore.js';

describe('LottoStore 모델 테스트', () => {
  test('인스턴스 테스트', () => {
    const purchaseAmount = '8000';
    const lottoStore = new LottoStore(purchaseAmount);
    expect(lottoStore).toBeInstanceOf(LottoStore);
  });

  test('유효하지 않은 입력에 대한 테스트', () => {
    const purchaseAmount = '8001';
    expect(() => new LottoStore(purchaseAmount)).toThrow(
      ERROR_MESSAGES.invalidAmount,
    );
  });

  test('getLottos() 메소드 테스트', () => {
    Random.pickUniqueNumbersInRange = jest.fn();
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);

    const purchaseAmount = '2000';
    const lottoStore = new LottoStore(purchaseAmount);
    const lottos = lottoStore.getLottos();

    expect(lottos).toHaveLength(2);
    lottos.forEach(lotto => expect(lotto).toEqual([1, 2, 3, 4, 5, 6]));
  });
});
