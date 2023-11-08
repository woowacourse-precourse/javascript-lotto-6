import { getLogSpy, mockReadLineAsync } from './mockMissionUtils';
import { repeatAskingWithErrorHandling } from '../src/repeatAskingWithErrorHandling';
import { askPurchaseAmount } from '../src/askPurchaseAmount';

describe('repeatAskingWithErrorHandling', () => {
  test('잘못 입력할 경우 에러 메시지 출력 후, 다시 입력 받음', async () => {
    // given
    const inputs = ['1000j', '8000'];
    mockReadLineAsync(inputs);
    const logSpy = getLogSpy();

    // when
    const result = await repeatAskingWithErrorHandling(askPurchaseAmount);

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] Invalid purchase amount.')
    );
    expect(result).toBe(8000);
  });
});
