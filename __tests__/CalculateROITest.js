import ROI from '../src/domain/CalculateROI.js';
import { MAGIC_NUMBER } from '../src/constants/MagicNumber.js';

describe('수익률 계산', () => {
  test.each([
    [10000, [0, 0, 0, 0, 1], (MAGIC_NUMBER.prizeFirst / 10000) * 100],
    [10000, [0, 0, 0, 1, 0], (MAGIC_NUMBER.prizeSecond / 10000) * 100],
    [10000, [0, 0, 1, 0, 0], (MAGIC_NUMBER.prizeThird / 10000) * 100],
    [10000, [0, 1, 0, 0, 0], (MAGIC_NUMBER.prizeFourth / 10000) * 100],
    [10000, [1, 0, 0, 0, 0], (MAGIC_NUMBER.prizeFifth / 10000) * 100],
    [10000, [0, 0, 0, 0, 0], 0],
  ])(
    '투자 금액이 %i이고, 당첨 번호 %j일 때 수익률은 %i 이다',
    (amount, winningNumber, expected) => {
      const roi = ROI(amount, winningNumber);
      expect(roi).toBeCloseTo(expected, 1);
    }
  );

  test('예외 상황에서의 수익률 계산', () => {
    expect(() => ROI(0, [1, 0, 0, 0, 0])).toThrow();
  });
});
