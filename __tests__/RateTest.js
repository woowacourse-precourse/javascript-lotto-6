import Rate from '../src/Rate.js';

describe('수익률 클래스 테스트', () => {
  test('총 수익 금액과 수익률이 반올림된 소수점 첫째자리까지 올바르게 계산되어야 한다.', () => {
    // given
    const revenues = [50000, 5000];
    const PRICE = 3000;
    const output = '1,833.3';

    // when
    const rateObject = new Rate(revenues, PRICE);
    const rate = rateObject.getRate();

    // then
    expect(rate).toBe(output);
  });
});
