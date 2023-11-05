import LottoController from '../../src/controller/LottoController';
import { LOTTO } from '../../src/constants/setting';
import Lotto from '../../src/Lotto';

describe('LottoController 클래스 테스트', () => {
  describe('로또 발급 테스트', () => {
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

        const matchResult = lottoController.matchLotto(
          lotto,
          winningNumbers,
          bonusNumber,
        );
        const matchKey = lottoController.determineStatisticsKey(matchResult);

        expect(matchKey).toBe(`match${expectedCount}`);
      },
    );

    test.each([
      { lottoNumbers: [1, 2, 3, 4, 5, 45], count: 0, expectedMatch: 'match1' },
      {
        lottoNumbers: [7, 8, 9, 10, 11, 45],
        count: 1,
        expectedMatch: 'match2',
      },
      {
        lottoNumbers: [7, 14, 15, 16, 17, 45],
        count: 2,
        expectedMatch: 'match3',
      },
      {
        lottoNumbers: [7, 14, 21, 22, 23, 45],
        count: 3,
        expectedMatch: 'match4',
      },
      {
        lottoNumbers: [7, 14, 21, 28, 29, 45],
        count: 4,
        expectedMatch: 'match5',
      },
      {
        lottoNumbers: [7, 14, 21, 28, 35, 45],
        count: 5,
        expectedMatch: 'match5Bonus',
      },
    ])(
      '로또 번호가 $count개 일치, 보너스 번호 일치',
      ({ lottoNumbers, expectedMatch }) => {
        const lotto = new Lotto(lottoNumbers);

        const matchResult = lottoController.matchLotto(
          lotto,
          winningNumbers,
          bonusNumber,
        );
        const matchKey = lottoController.determineStatisticsKey(matchResult);

        expect(matchKey).toBe(expectedMatch);
      },
    );
  });
});
