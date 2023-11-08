import Lotto from '../src/Lotto';
import LottoResultChecker from '../src/LottoResultChecker';

describe('LottoResultChecker 테스트', () => {
  test('로또 당첨 결과를 확인한다.', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 5, 4, 23, 45, 7]),
    ];
    const lottoBalls = { winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 };

    const checker = new LottoResultChecker(lottoBalls);
    const result = checker.checkLottoResult(lottoTickets);

    const prize = {
      first: 1,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    };
    expect(result).toStrictEqual(prize);
  });
});
