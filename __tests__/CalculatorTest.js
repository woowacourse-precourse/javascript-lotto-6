import { Profit, ProfitRate, Rank } from '../src/calculation/index.js';
import { RANK } from '../src/constant/constant';

describe('[계산] Profit, ProfitRate, Rank 클래스 테스트', () => {
  test('Profit 클래스 내에 calculate 함수가 주어진 순위에 따라 올바른 상금을 반환하는지 확인한다.', () => {
    expect(Profit.calculate(1)).toBe(RANK[1]);
    expect(Profit.calculate(2)).toBe(RANK[2]);
    expect(Profit.calculate(3)).toBe(RANK[3]);
    expect(Profit.calculate(4)).toBe(RANK[4]);
    expect(Profit.calculate(5)).toBe(RANK[5]);
    expect(Profit.calculate(6)).toBe(RANK[0]);
  });

  test('ProfitRate 클래스 내에 calculate 함수가 주어진 비용과 이익에 대해 올바른 수익률을 반환하는지 확인한다.', () => {
    expect(ProfitRate.calculate(10000, 5000)).toBe('50.0');
    expect(ProfitRate.calculate(5000, 2000)).toBe('40.0');
    expect(ProfitRate.calculate(1000000, 150000)).toBe('15.0');
    expect(ProfitRate.calculate(0, 0)).toBe('NaN');
  });

  it('Rank 클래스 내에 calculate 함수가 당첨 번호와 일치하는 숫자의 개수와 보너스 숫자 매칭 여부에 대해 올바른 등수를 반환하는지 확인한다.', () => {
    expect(Rank.calculate(6, true)).toBe(1);
    expect(Rank.calculate(5, true)).toBe(2);
    expect(Rank.calculate(5, false)).toBe(3);
    expect(Rank.calculate(4, false)).toBe(4);
    expect(Rank.calculate(3, false)).toBe(5);
    expect(Rank.calculate(2, false)).toBe(0);
  });
});
