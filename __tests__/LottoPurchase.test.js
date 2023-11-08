import { getLogSpy, mockReadLineAsync } from './mockMissionUtils';
import LottoPurchase from '../src/LottoPurchase';

describe('askPurchaseAmount 함수 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('8000 입력', async () => {
    // given
    const purchaseAmount = ['8000'];
    mockReadLineAsync(purchaseAmount);

    // when
    const result = await LottoPurchase.askPurchaseAmount();

    // then
    expect(result).toBe(8000);
  });

  test.each([[''], ['1000j'], ['-8000'], ['8080']])(
    '"%s" 입력',
    async (purchaseAmount) => {
      // given
      mockReadLineAsync([purchaseAmount, 8000]);

      // when & then
      await expect(LottoPurchase.askPurchaseAmount()).rejects.toThrow(
        '[ERROR] Invalid purchase amount.'
      );
    }
  );
});

describe('로또 구매 기능 테스트', () => {
  test('로또 8개 구입', () => {
    // given
    const lottoAmount = 8;
    const log = '8개를 구입했습니다.';
    const logSpy = getLogSpy();

    // when
    const lottos = LottoPurchase.purchaseLottos(lottoAmount);

    // then
    expect(lottos.length).toBe(lottoAmount);
    expect(logSpy).toHaveBeenCalledWith(log);
  });
});
