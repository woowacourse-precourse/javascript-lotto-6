import Bank from '../src/domain/Bank';

describe('뱅크 클래스 테스트', () => {
  test('수익률 계산', () => {
    const money = 5000;

    const prize = {
      first: 1,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    const bank = new Bank(money, prize);
    const profitRate = bank.getProfitRate();
    expect(profitRate).toBe("40000000.0");
  });
});
