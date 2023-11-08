import calculate from '../src/utils/calculate.js';

describe('calculate 기능 테스트', () => {
  test('구입금액을 수량으로 변환하는 기능 확인', () => {
    // given
    const input = 10000;
    const answer = 10;

    // when
    const result = calculate.countFrom(input);

    // then
    expect(result).toBe(answer);
  });

  test('수익률을 구하는 테스트', () => {
    // given
    const resultArray = [1, 0, 0, 0, 0];
    const money = 8000;

    // when
    const result = calculate.profitFrom(resultArray, money);

    // then
    expect(result).toBe('62.5');
  });
});
