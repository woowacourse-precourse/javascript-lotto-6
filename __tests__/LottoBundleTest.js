import Lotto from '../src/models/Lotto';
import LottoBundle from '../src/models/LottoBundle';
import WinLotto from '../src/models/WinLotto';

describe('LottoBundle 클래스 테스트', () => {
  const amount = [3, 5, 10];

  test.each(amount)('로또 리스트를 생성한다 %i', (amount) => {
    const lottos = new LottoBundle(amount);
    const lottoList = lottos.getLottoBundle();

    expect(lottoList.length).toBe(amount);
  });

  const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
  const bonusNumber = 7;
  const winLotto = new WinLotto([winningNumbers, bonusNumber]);

  test.each(amount)(
    '추첨 번호와 당첨번호를 비교하여 당첨갯수를 반환한다.',
    (amount) => {
      const lottoBundle = new LottoBundle(amount);
      const matchedNumberList = lottoBundle.populateWinResult(winLotto);

      expect(Array.isArray(matchedNumberList)).toBe(true);
      expect(matchedNumberList.every(Array.isArray)).toBe(true);
    }
  );
});
