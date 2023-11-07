import Lotto from '../src/Lotto';
import LottoBalls from '../src/LottoBalls';
import LottoResultCalculator from '../src/LottoResultCalculator';

describe('LottoResultCalculator 테스트', () => {
  test('로또 당첨 결과를 확인한다.', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 5, 4, 23, 45, 7]),
    ];

    const lottoBalls = new LottoBalls('1,2,3,4,5,6', '7');
    const calculator = new LottoResultCalculator(lottoBalls);
    const result = calculator.checkLottoResult(lottoTickets);

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
