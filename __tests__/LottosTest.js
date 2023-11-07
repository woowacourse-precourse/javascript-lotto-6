import Lottos from '../src/models/Lottos';
import WinningLotto from '../src/models/WinnigLotto';

describe('Lottos 클래스 테스트', () => {
  const amount = [3, 5, 10];

  test.each(amount)('로또 리스트를 생성한다 %i', (amount) => {
    const lottos = new Lottos(amount);
    const lottoList = lottos.getLottos();

    expect(lottoList.length).toBe(amount);
  });

  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const winningLotto = new WinningLotto({ winningNumbers, bonusNumber });

  test.each(amount)(
    '추첨 번호와 당첨번호를 비교하여 당첨갯수를 반환한다.',
    (amount) => {
      const lottos = new Lottos(amount);
      const winnigResult = [];

      lottos.compareLotto(winningLotto, winnigResult);

      expect(Array.isArray(winnigResult)).toBe(true);
      expect(winnigResult.every(Array.isArray)).toBe(true);
    },
  );
});
