import InputAmount from '../src/InputAmount.js';
import OrganizeResults from '../src/OrganizeResults.js';
import Lotto from '../src/Lotto.js';
import PrintResults from '../src/PrintResults.js';

describe('함수 기능 테스트', () => {

  const organize = new OrganizeResults();
  const inputAmount = new InputAmount();
  inputAmount.Published.numbers = [
    [1, 13, 18, 23, 30, 42],
    [2, 7, 18, 20, 42, 44],
    [2, 4, 12, 17, 36, 39],
    [4, 7, 15, 19, 26, 31],
    [3, 11, 16, 22, 25, 45],
    [2, 7, 18, 19, 20, 44],
    [2, 7, 8, 20, 42, 44]
  ]
  const BONUS = 8;
  const lotto = new Lotto([2, 7, 18, 20, 42, 44]);

  organize.organizeRank(lotto, inputAmount.Published, BONUS);
  const rate = organize.calculateRate(inputAmount.Published);

  test('로또 발행 번호 오름차순 배열 기능 테스트', () => {
    const inputAmount = new InputAmount();
    inputAmount.publishLotto(1000);
    inputAmount.Published.numbers.forEach((number) => {
      for (let i = 0; i < number.length - 1; i += 1) {
        const result = number[i] < number[i + 1];
        expect(result).toBeTruthy();
      }
    });
  });

  test('당첨 로또 분류 기능 테스트', () => {
    expect(inputAmount.Published.rank).toEqual([1, 1, 1, 0, 0]);
  });

  test('수익률 계산 기능 테스트', () => {
    expect(rate).toEqual( (2031500000 / 7000) * 100);
  });

  test('수익률 출력 기능 테스트', () => {
    const print = new PrintResults();
    expect(print.styleRate(rate)).toEqual('29,021,428.6');
  });
});