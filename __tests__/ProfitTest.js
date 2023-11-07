import Profit from '../src/domains/Profit.js';

describe('수익 클래스 테스트', () => {
  test('구매한 모든 로또에서 당첨된 로또의 개수를 리턴 테스트', () => {
    const profit = new Profit(['1', '3', '0', '2', '2', '1', '0', '0']);
    const output = profit.getHistory();
    expect(output).toEqual([1, 0, 0, 0, 0]);
  });

  test('총 수익률 계산 테스트', () => {
    const profit = new Profit(['1', '3', '0', '2', '2', '1', '0', '0']);
    const output = profit.calculate(8_000);
    expect(output).toEqual(62.5);
  });

  test('총 수익률 계산 테스트2', () => {
    const profit = new Profit(['1', '3', '0', '4', '3', '1', '0', '0']);
    const output = profit.calculate(8_000);
    expect(output).toEqual(750);
  });

  test('총 수익률 계산 테스트(보너스 넘버)', () => {
    const profit = new Profit(['1', '2', '0', '1', '2', '5+1', '0', '0']);
    const output = profit.calculate(8_000);
    expect(output).toEqual(375000);
  });
});
