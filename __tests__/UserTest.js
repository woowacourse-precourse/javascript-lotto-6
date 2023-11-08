import User from '../src/User';

describe('유저 클래스 테스트', () => {
  const results = [
    { lottoCount: 3, isBonus: null },
    { lottoCount: 5, isBonus: false },
    { lottoCount: 5, isBonus: true },
  ];

  const user = new User(3000);

  test('유저 로또 결과 테스트', () => {
    const expectedResult = {
      threeEqual: 1,
      fourEqual: 0,
      fiveEqual: 1,
      fiveEqualAndBonus: 1,
      sixEqual: 0,
    };

    results.forEach((result) =>
      user.setResult(result.lottoCount, result.isBonus)
    );

    expect(user.results).toEqual(expectedResult);
  });

  test('유저 수익 및 수익률 테스트', () => {
    const expectedYeild = '1050166.7';

    results.forEach((result) => {
      user.setProfit(result.lottoCount, result.isBonus);
    });

    user.setYeild();

    expect(user.yeild).toEqual(expectedYeild);
  });
});
