import LottoController from '../../src/controller/LottoController';
import { LOTTO } from '../../src/constants/setting';
import Lotto from '../../src/Lotto';

describe('LottoController 클래스 테스트', () => {
  test.each([
    [1000, 1000 / LOTTO.price],
    [8000, 8000 / LOTTO.price],
    [12000, 12000 / LOTTO.price],
  ])('로또 %d원치 구매시 %d개의 로또 발급', (money, lottoCount) => {
    const lottoController = new LottoController(money);

    lottoController.issueLotto = jest.fn();

    lottoController.purchaseLotto();
    expect(lottoController.issueLotto).toHaveBeenCalledTimes(lottoCount);
  });

  describe('로또 번호 일치 테스트', () => {
    let lottoController;
    const winningNumbers = [7, 14, 21, 28, 35, 42];
    const bonusNumber = 45;

    beforeEach(() => {
      lottoController = new LottoController();
    });

    test.each([
      { lottoNumbers: [7, 8, 9, 10, 11, 12], expectedCount: 1 },
      { lottoNumbers: [7, 14, 15, 16, 17, 18], expectedCount: 2 },
      { lottoNumbers: [7, 14, 21, 22, 23, 24], expectedCount: 3 },
      { lottoNumbers: [7, 14, 21, 28, 29, 30], expectedCount: 4 },
      { lottoNumbers: [7, 14, 21, 28, 35, 36], expectedCount: 5 },
      { lottoNumbers: [7, 14, 21, 28, 35, 42], expectedCount: 6 },
    ])(
      '로또 번호가 $expectedCount개 일치, 보너스 번호 불일치',
      ({ lottoNumbers, expectedCount }) => {
        const lotto = new Lotto(lottoNumbers);

        const { count, bonus } = lottoController.matchLotto(
          lotto,
          winningNumbers,
          bonusNumber,
        );

        expect(count).toBe(expectedCount);
        expect(bonus).toBeFalsy();
      },
    );

    test.each([
      { lottoNumbers: [1, 2, 3, 4, 5, 45], expectedCount: 0 },
      { lottoNumbers: [7, 8, 9, 10, 11, 45], expectedCount: 1 },
      { lottoNumbers: [7, 14, 15, 16, 17, 45], expectedCount: 2 },
      { lottoNumbers: [7, 14, 21, 22, 23, 45], expectedCount: 3 },
      { lottoNumbers: [7, 14, 21, 28, 29, 45], expectedCount: 4 },
      { lottoNumbers: [7, 14, 21, 28, 35, 45], expectedCount: 5 },
    ])(
      '로또 번호가 $expectedCount개 일치, 보너스 번호 일치',
      ({ lottoNumbers, expectedCount }) => {
        const lotto = new Lotto(lottoNumbers);

        const { count, bonus } = lottoController.matchLotto(
          lotto,
          winningNumbers,
          bonusNumber,
        );

        expect(count).toBe(expectedCount);
        expect(bonus).toBeTruthy();
      },
    );
  });
});
