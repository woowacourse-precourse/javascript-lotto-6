import Lotto from '../src/Lotto';
import LottoWinnerVerifier from '../src/LottoWinnerVerifier';

describe('LottoWinnerVerifier 클래스 테스트', () => {
  test('로또 당첨 결과 반환', () => {
    const verifier = new LottoWinnerVerifier([1, 2, 3, 23, 32, 40], 5);
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([10, 11, 12, 13, 14, 5]),
    ];
    const outcome = verifier.checkLottoOutcome(lottos);
    const result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    };
    expect(outcome).toEqual(result);
  });
});
