import CompareLotto from '../src/CompareLotto.js';

describe('로또 구입과 번호 생성 테스트', () => {
  let compareLotto;

  beforeEach(() => {
    compareLotto = new CompareLotto();
  });

  test('로또 결과 출력', () => {
    const matchCount = [0, 4, 1, 0, 2];
    const compareLotto = new CompareLotto();

    const totalProfitSpy = jest
      .spyOn(compareLotto, 'totalProfit')
      .mockImplementation(() => {});

    const logSpy = jest.spyOn(console, 'log');
    compareLotto.matchingLottoCount(matchCount);

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    expect(totalProfitSpy).not.toHaveBeenCalledTimes(0);

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
