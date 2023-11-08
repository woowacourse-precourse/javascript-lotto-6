import App from '../src/App.js';
import Lotto from '../src/Lotto.js';

describe('app.js 함수 테스트', () => {
  test('getRank 함수 테스트', () => {
    const app = new App();

    const LOTTO = new Lotto([1, 2, 3, 4, 7, 6]);
    const WINNING_LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    const BONUS_NUMBER = 7;

    const RESULT = app.getRank(LOTTO, WINNING_LOTTO, BONUS_NUMBER);

    expect(RESULT).toEqual({rank: 2, winningMoney: 30_000_000, message: '5개 일치, 보너스 볼 일치 (30,000,000원)'});
  });

  test('calculateProfitRate 함수 테스트', () => {
    const app = new App();

    const MONEY = 14000;
    const RANKS = [
      {rank: 2, winningMoney: 30_000_000, message: '5개 일치, 보너스 볼 일치 (30,000,000원)'},
      {rank: 3, winningMoney: 1_500_000, message: '5개 일치 (1,500,000원)'},
      {rank: 6, winningMoney: 0, message: '꽝'}
    ];

    const RESULT = app.calculateProfitRate(MONEY, RANKS);

    expect(RESULT).toBe(225000);
  });
})