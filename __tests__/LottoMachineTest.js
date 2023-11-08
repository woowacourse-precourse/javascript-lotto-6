import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine';
import Lotto from '../src/Lotto';
import { NUMBER, SYMBOLS } from '../src/constants';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

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

  test('구매한 로또 배열의 문자열과 개수를 반환하는 buy 메서드를 테스트한다.', () => {
    const lottoMachine = new LottoMachine();
    const purchaseAmount = 2000;

    const lottoArrays = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ];

    mockRandoms(lottoArrays);

    const { lottos, lottoCount } = lottoMachine.buy(purchaseAmount);

    expect(lottoCount).toBe(purchaseAmount / NUMBER.lottoPurchaseUnit);

    lottoArrays.forEach((lotto) => {
      expect(lottos).toContain(lotto.join(SYMBOLS.printDivider));
    });
  });
});
