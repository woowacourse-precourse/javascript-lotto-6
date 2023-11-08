import {
  calculateRateOfReturn,
  roundRateOfReturn,
} from '../src/utils/RevenueUtil';

describe('수익률 계산 테스트', () => {
  test('구매한 금액 대비 당첨금에 대한 수익률을 계산한다.', () => {
    const rate = calculateRateOfReturn(1000, 1000);
    expect(rate).toEqual(100);
  });

  test('계산한 수익률의 소수점 두번째 자리에서 반올림 한다', () => {
    const roundedRate = roundRateOfReturn(50.78);
    expect(roundedRate).toBe(50.8);
  });
});
