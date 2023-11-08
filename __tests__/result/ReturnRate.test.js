import ReturnRate from '../../src/result/ReturnRate.js';

describe('result/returnRate : 수익률 계산과 반환 테스트', () => {
  const returnRate = new ReturnRate();

  test('8000원을 사서 5000원을 얻으면, 62.5%의 수익률이 반환된다.', () => {
    expect(returnRate.calculate(5000, 8000)).toEqual('62.5');
  });

  test('1000원을 사서 1000원을 얻으면, 100.0%의 수익률이 반환된다.', () => {
    expect(returnRate.calculate(1000, 1000)).toEqual('100.0');
  });

  test('5000원을 사서 10000원을 얻으면, 200.0%의 수익률이 반환된다.', () => {
    expect(returnRate.calculate(10000, 5000)).toEqual('200.0');
  });
});
