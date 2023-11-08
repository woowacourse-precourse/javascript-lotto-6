import { mockReadLineAsync } from './mockMissionUtils';
import { askPurchaseAmount } from '../src/askPurchaseAmount';

describe('askPurchaseAmount 함수 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('8000 입력', async () => {
    // given
    const purchaseAmount = ['8000'];
    mockReadLineAsync(purchaseAmount);

    // when
    const result = await askPurchaseAmount();

    // then
    expect(result).toBe(8000);
  });

  test.each([[''], ['1000j'], ['-8000'], ['8080']])(
    '"%s" 입력',
    async (purchaseAmount) => {
      // given
      mockReadLineAsync([purchaseAmount, 8000]);

      // when & then
      await expect(askPurchaseAmount()).rejects.toThrow(
        '[ERROR] Invalid purchase amount.'
      );
    }
  );
});
