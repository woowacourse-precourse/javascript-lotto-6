import Lotto from '../src/Lotto';
import LottoWinnerVerifier from '../src/LottoWinnerVerifier';

describe('LottoWinnerVerifier 클래스 테스트', () => {
  test('로또 당첨 결과 반환', () => {
    const lottoNumbers = {
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    };
    const verifier = new LottoWinnerVerifier(lottoNumbers);
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([1, 8, 11, 31, 41, 42]),
      new Lotto([13, 14, 16, 38, 42, 45]),
      new Lotto([7, 11, 30, 40, 42, 43]),
      new Lotto([2, 13, 22, 32, 38, 45]),
      new Lotto([1, 3, 5, 14, 22, 45]),
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
