import LottoMachine from '../src/LottoMachine';
import Lotto from '../src/Lotto';

describe('LottoMachine 테스트', () => {
  test('구매 개수만큼 Lotto 배열을 생성하는 pickLotto 메서드를 테스트한다.', () => {
    const lottoMachine = new LottoMachine();

    const lottoCount = 1;
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ];

    lottos.forEach((lotto) => {
      lottoMachine.pickLotto = jest.fn();
      lottoMachine.pickLotto.mockImplementation(() => new Lotto(lotto));

      expect(lottoMachine.pickLotto(lottoCount) instanceof Lotto).toBeTruthy();
    });
  });
});
