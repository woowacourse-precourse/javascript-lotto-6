import Calculate from '../src/model/Calculate.js';

describe('로또 계산 기능 테스트', () => {
  test('로또 수량 계산', () => {
    const calculate = new Calculate();
    const mock = jest.fn(money => calculate.countLottoAmounnt(money));
    const moneyInput = ['1000', '5000', '9000'];
    const amount = [1, 5, 9];

    moneyInput.forEach((money, idx) => {
      expect(mock(money)).toBe(amount[idx]);
    });
  });

  test('랭킹 계산_6개 정답일 경우', async () => {
    const calculate = new Calculate();
    const lottoList = [[1, 2, 3, 4, 5, 6]];
    const lotto = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const result = [0, 0, 0, 0, 1];
    expect(await calculate.countTotalRanking(lottoList, lotto, bonus)).toEqual(result);
  });

  test('랭킹 계산_5개 정답 + 보너스 정답일 경우', async () => {
    const calculate = new Calculate();
    const lottoList = [[1, 2, 3, 4, 5, 6]];
    const lotto = [1, 2, 3, 4, 5, 10];
    const bonus = 6;
    const result = [0, 0, 0, 1, 0];
    expect(await calculate.countTotalRanking(lottoList, lotto, bonus)).toEqual(result);
  });

  test('랭킹 계산_5개 정답일 경우', async () => {
    const calculate = new Calculate();
    const lottoList = [[1, 2, 3, 4, 5, 6]];
    const lotto = [1, 2, 3, 4, 5, 10];
    const bonus = 7;
    const result = [0, 0, 1, 0, 0];
    expect(await calculate.countTotalRanking(lottoList, lotto, bonus)).toEqual(result);
  });

  test('랭킹 계산_4개 정답일 경우', async () => {
    const calculate = new Calculate();
    const lottoList = [[1, 2, 3, 4, 5, 6]];
    const lotto = [1, 2, 3, 4, 9, 10];
    const bonus = 7;
    const result = [0, 1, 0, 0, 0];
    expect(await calculate.countTotalRanking(lottoList, lotto, bonus)).toEqual(result);
  });

  test('랭킹 계산_3개 정답일 경우', async () => {
    const calculate = new Calculate();
    const lottoList = [[1, 2, 3, 4, 5, 6]];
    const lotto = [1, 2, 3, 8, 9, 10];
    const bonus = 7;
    const result = [1, 0, 0, 0, 0];
    expect(await calculate.countTotalRanking(lottoList, lotto, bonus)).toEqual(result);
  });

  test('랭킹 계산_정답 없는 경우', async () => {
    const calculate = new Calculate();
    const lottoList = [[1, 2, 3, 4, 5, 6]];
    const lotto = [10, 11, 12, 13, 14, 15];
    const bonus = 7;
    const result = [0, 0, 0, 0, 0];
    expect(await calculate.countTotalRanking(lottoList, lotto, bonus)).toEqual(result);
  });

  test('수익률 계산', () => {
    const calculate = new Calculate();
    calculate.countMatch = [0, 0, 0, 0, 1];
    const price = 2000;

    expect(calculate.calculateBenefit(price)).toEqual('100000000.0');
  });
});
