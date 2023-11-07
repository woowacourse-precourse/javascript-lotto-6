import LottoController from '../../src/controller/LottoController';
import { LOTTO_PRICE } from '../../src/constants/setting';
import LottoShop from '../../src/domain/LottoShop';
import Lotto from '../../src/domain/Lotto';

describe('LottoController 클래스 테스트', () => {
  describe('로또 발급 테스트', () => {
    test.each([
      [1000, 1000 / LOTTO_PRICE],
      [8000, 8000 / LOTTO_PRICE],
      [12000, 12000 / LOTTO_PRICE],
    ])('로또 %d원치 구매시 %d개의 로또 발급', (money, lottoCount) => {
      LottoShop.generateLotto = jest.fn(() => new Lotto([1, 2, 3, 4, 5, 6]));
      const lottoController = new LottoController(money);

      expect(LottoShop.generateLotto).toHaveBeenCalledTimes(lottoCount);
    });
  });

  describe('로또 비교 테스트, 보너스 번호 불일치', () => {
    const lotto = new Lotto([7, 14, 21, 28, 35, 42]);
    let lottoController;

    beforeEach(() => {
      lottoController = new LottoController(1000);
    });

    test.each([
      {
        winningNumbers: [7, 8, 9, 10, 11, 12],
        bonusNumber: 45,
        expectCount: 1,
      },
      {
        winningNumbers: [7, 14, 9, 10, 11, 12],
        bonusNumber: 45,
        expectCount: 2,
      },
      {
        winningNumbers: [7, 14, 21, 10, 11, 12],
        bonusNumber: 45,
        expectCount: 3,
      },
      {
        winningNumbers: [7, 14, 21, 28, 11, 12],
        bonusNumber: 45,
        expectCount: 4,
      },
      {
        winningNumbers: [7, 14, 21, 28, 35, 12],
        bonusNumber: 45,
        expectCount: 5,
      },
      {
        winningNumbers: [7, 14, 21, 28, 35, 42],
        bonusNumber: 45,
        expectCount: 6,
      },
    ])(
      '로또 번호 $expectCount개 일치',
      ({ winningNumbers, bonusNumber, expectCount }) => {
        const { count, bonus } = lottoController.matchLotto(
          lotto,
          winningNumbers,
          bonusNumber,
        );

        expect(count).toBe(expectCount);
        expect(bonus).toBeFalsy();
      },
    );
  });

  describe('로또 비교 테스트, 보너스 번호 일치', () => {
    const lotto = new Lotto([7, 14, 21, 28, 35, 45]);
    let lottoController;

    beforeEach(() => {
      lottoController = new LottoController(1000);
    });

    test.each([
      {
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 45,
        expectCount: 0,
      },
      {
        winningNumbers: [7, 2, 3, 4, 5, 6],
        bonusNumber: 45,
        expectCount: 1,
      },
      {
        winningNumbers: [7, 14, 3, 4, 5, 6],
        bonusNumber: 45,
        expectCount: 2,
      },
      {
        winningNumbers: [7, 14, 21, 4, 5, 6],
        bonusNumber: 45,
        expectCount: 3,
      },
      {
        winningNumbers: [7, 14, 21, 28, 5, 6],
        bonusNumber: 45,
        expectCount: 4,
      },
      {
        winningNumbers: [7, 14, 21, 28, 35, 6],
        bonusNumber: 45,
        expectCount: 5,
      },
    ])(
      '로또 번호 $expectCount개 일치',
      ({ winningNumbers, bonusNumber, expectCount }) => {
        const { count, bonus } = lottoController.matchLotto(
          lotto,
          winningNumbers,
          bonusNumber,
        );

        expect(count).toBe(expectCount);
        expect(bonus).toBeTruthy();
      },
    );
  });
});
