import CirculateRate from '../../src/utils/CirculateRate.js';

describe('CirculateRate 클래스 테스트', () => {
  describe('winningReword() 메소드 테스트', () => {
    test('당첨 금액 계산 결과가 정상적으로 반환되는지 확인한다.', () => {
      const winnings = [1, 0, 1, 0, 3];
      const result = CirculateRate.winningReword(winnings);
      expect(result).toBe(5000 + 1500000 + 2000000000 * 3);
    });

    test('하나도 당첨되지 않은 경우 당첨 금액이 0으로 반환되는지 확인한다.', () => {
      const winnings = [0, 0, 0, 0, 0];
      const result = CirculateRate.winningReword(winnings);
      expect(result).toBe(0);
    });
  });

  test('calculateRevenueRate() 메소드 테스트', () => {
    const winningReword = 5000;
    const purchaseAmount = 8000;
    const result = CirculateRate.calculateRevenueRate(winningReword, purchaseAmount);
    expect(result).toBe(62.5);
  });

  test('revenueRate() 메소드 테스트', () => {
    const winnings = [1, 0, 0, 0, 0];
    const purchaseAmount = 8000;
    const result = CirculateRate.revenueRate(winnings, purchaseAmount);
    expect(result).toBe((5000 / 8000) * 100);
  });
});
