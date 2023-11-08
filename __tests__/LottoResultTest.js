import CalculateLottoResult from '../src/mvc/model/calculate_lotto_result.js';

const expectTestResult = {
  grade: {
    first: 1,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  },
  revenue: {
    earningsRate: '200000000.0',
  },
};

test('로또 결과 계산 테스트', () => {
  const RANDOM_LOTTO = [[1, 2, 3, 4, 5, 6]];
  const WINNING_NUM = [1, 2, 3, 4, 5, 6];
  const BONUS_NUM = 7;
  const RESULT = new CalculateLottoResult(RANDOM_LOTTO, WINNING_NUM, BONUS_NUM);
  const LOTTO_RESULT = RESULT.lottoResult;
  expect(LOTTO_RESULT).toEqual(expectTestResult);
});
