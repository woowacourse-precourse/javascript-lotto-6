import Calculator from '../src/Calculator.js';

describe('Calculator 클래스 테스트', () => {
  const purchaseAmount = 8000;
  const matchStats = new Map([
    [5000, 1],
    [50000, 0],
    [1500000, 0],
    [30000000, 0],
    [2000000000, 0],
  ]);
  const { rateOfReturn } = new Calculator(purchaseAmount, matchStats);
  test('수익률이 정확한지 확인한다.(소수점 둘째자리에서 반올림)', () => {
    expect(rateOfReturn).toEqual(62.5);
  });
});
