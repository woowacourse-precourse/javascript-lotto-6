import PrizeService from '../../src/services/PrizeService.js';
import PRIZE from '../../src/constants/prize.js';
import Lotto from '../../src/Domain/Lotto.js';
import WinningLotto from '../../src/Domain/WinningLotto.js';

describe('PrizeService 클래스 테스트', () => {
  let prizeService;

  beforeEach(() => {
    prizeService = new PrizeService();
  });

  describe('getPrize 메서드 테스트', () => {
    const cases = [
      {
        lottoNumbers: [1, 2, 3, 4, 5, 6],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedPrize: PRIZE[6].winningPrize,
      },
      {
        lottoNumbers: [1, 2, 3, 4, 5, 7],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedPrize: PRIZE.matchFiveAndBonus.winningPrize,
      },
      {
        lottoNumbers: [1, 2, 3, 4, 5, 6],
        winningNumbers: [1, 2, 3, 4, 5, 7],
        bonusNumber: 8,
        expectedPrize: PRIZE[5].winningPrize,
      },
      {
        lottoNumbers: [1, 2, 3, 4, 5, 6],
        winningNumbers: [1, 2, 3, 4, 7, 8],
        bonusNumber: 9,
        expectedPrize: PRIZE[4].winningPrize,
      },
      {
        lottoNumbers: [1, 2, 3, 4, 5, 6],
        winningNumbers: [1, 2, 3, 7, 8, 9],
        bonusNumber: 10,
        expectedPrize: PRIZE[3].winningPrize,
      },
    ];

    test.each(cases)(
      '로또 번호 : $lottoNumbers | 당첨 번호 : $winningNumbers | 보너스 번호 : $bonusNumber | 상금 : $expectedPrize',
      ({ lottoNumbers, winningNumbers, bonusNumber, expectedPrize }) => {
        const lotto = new Lotto(lottoNumbers);
        const winningLotto = new WinningLotto({
          numbers: winningNumbers,
          bonusNumber,
        });

        const prize = prizeService.getPrize({ lotto, winningLotto });

        expect(prize.winningPrize).toBe(expectedPrize);
      },
    );
  });

  describe('getProfitRate 메서드 테스트', () => {
    const cases = [
      {
        status: 3,
        prizes: { 3: 1 },
        purchaseQuantity: 5,
        expectedProfitRate: '100.0',
      },
      {
        status: 4,
        prizes: { 3: 1 },
        purchaseQuantity: 8,
        expectedProfitRate: '62.5',
      },
      {
        status: 5,
        prizes: { 4: 1 },
        purchaseQuantity: 50,
        expectedProfitRate: '100.0',
      },
      {
        status: 'matchFiveAndBonus',
        prizes: { 5: 1 },
        purchaseQuantity: 1_500,
        expectedProfitRate: '100.0',
      },
      {
        status: 6,
        prizes: { matchFiveAndBonus: 1 },
        purchaseQuantity: 30_000,
        expectedProfitRate: '100.0',
      },
      {
        status: 6,
        prizes: { 6: 1 },
        purchaseQuantity: 2_000_000,
        expectedProfitRate: '100.0',
      },
    ];

    test.each(cases)(
      '로또를 $purchaseQuantity개 사서, 숫자를 $status개 맞추는 경우, 수익률이 $expectedProfitRate%?!',
      ({ prizes, purchaseQuantity, expectedProfitRate }) => {
        const profitRate = prizeService.getProfitRate({
          prizes,
          purchaseQuantity,
        });

        expect(profitRate).toBe(expectedProfitRate);
      },
    );
  });

  describe('countPrize 메서드 테스트', () => {
    const cases = [
      {
        prizes: [
          { status: 3 },
          { status: 4 },
          { status: 5 },
          { status: 'matchFiveAndBonus' },
          { status: 6 },
        ],
        expected: {
          3: 1,
          4: 1,
          5: 1,
          matchFiveAndBonus: 1,
          6: 1,
        },
      },
      {
        prizes: [{ status: 3 }, { status: 4 }, { status: 3 }],
        expected: {
          3: 2,
          4: 1,
        },
      },
      {
        prizes: [{ status: 3 }, { status: 3 }, { status: 3 }],
        expected: {
          3: 3,
        },
      },
    ];

    test.each(cases)(
      '상금들의 정보를 받아 각 상금의 개수를 반환해야 한다.',
      ({ prizes, expected }) => {
        const prizeCount = prizeService.countPrize(prizes);

        expect(prizeCount).toEqual(expected);
      },
    );
  });
});
