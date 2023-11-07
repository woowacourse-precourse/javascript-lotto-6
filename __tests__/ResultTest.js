import Result from '../src/Result.js';
import { matchNumbers, matchWinnings } from '../src/variables/data.js';

describe('결과 클래스 테스트', () => {
  test('로또 번호에 존재하는 당첨 번호와 보너스 번호의 개수를 정확히 계산한다.', () => {
    const lottos = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const result = new Result(lottos, winning, bonus);

    matchNumbers.three = 0;
    matchNumbers.four = 0;
    matchNumbers.five = 0;
    matchNumbers.fivePlusBonus = 0;
    matchNumbers.six = 0;

    result.countWinningAndBonus([1, 2, 3, 4, 5, 6]);

    expect(matchNumbers.six).toBe(1);
  });

  test('당첨 결과를 정확히 계산한다.', () => {
    const result = new Result();

    matchNumbers.three = 0;
    matchNumbers.four = 0;
    matchNumbers.five = 0;
    matchNumbers.fivePlusBonus = 0;
    matchNumbers.six = 0;

    result.countMatchNumbers(3, 0);
    result.countMatchNumbers(4, 0);
    result.countMatchNumbers(5, 0);
    result.countMatchNumbers(5, 1);
    result.countMatchNumbers(6, 0);

    expect(matchNumbers.three).toBe(1);
    expect(matchNumbers.four).toBe(1);
    expect(matchNumbers.five).toBe(1);
    expect(matchNumbers.fivePlusBonus).toBe(1);
    expect(matchNumbers.six).toBe(1);
  });

  test('당첨금을 정확히 계산한다.', () => {
    const result = new Result();

    matchNumbers.three = 1;
    matchNumbers.four = 1;
    matchNumbers.five = 0;
    matchNumbers.fivePlusBonus = 0;
    matchNumbers.six = 0;
    matchWinnings.three = 5000;
    matchWinnings.four = 50000;
    matchWinnings.five = 0;
    matchWinnings.fivePlusBonus = 0;
    matchNumbers.six = 0;

    result.countMatchWinnings();

    expect(matchWinnings.three).toBe(5000);
    expect(matchWinnings.four).toBe(50000);
    expect(matchWinnings.five).toBe(0);
    expect(matchWinnings.fivePlusBonus).toBe(0);
    expect(matchWinnings.six).toBe(0);
  });

  test('수익금을 정확히 계산한다.', () => {
    const result = new Result();

    matchWinnings.three = 5000;
    matchWinnings.four = 50000;
    matchWinnings.five = 0;
    matchWinnings.fivePlusBonus = 0;
    matchNumbers.six = 0;

    result.countProfit();

    expect(result.getProfit()).toBe(55000);
  });
});
