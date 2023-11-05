import calculate from '../src/utils/calculate.js';

describe('calculate 기능 테스트', () => {
  test('구입금액을 수량으로 변환하는 기능 확인', () => {
    const input = 10000;
    const answer = 10;
    const result = calculate.countFrom(input);
    expect(result).toBe(answer);
  });
});
