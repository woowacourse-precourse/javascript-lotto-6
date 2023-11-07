import Lotto from '../src/Lotto.js';
import LottoResult from '../src/LottoResult.js';
import { LOTTO_PRICE } from '../src/constants.js';

describe('LottoResult 테스트', () => {
  describe('발급된 로또가 1장인 경우', () => {
    let lottoResult;

    const lottos = [[1, 2, 3, 4, 5, 6]];
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    beforeEach(() => {
      lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
    });

    test('calculateTotalPrize 메서드가 정확한 총 상금을 반환', () => {
      expect(lottoResult.calculateTotalPrize()).toBe(2000000000);
    });

    test('calculateProfitRate 메서드가 정확한 수익률을 반환', () => {
      const totalSpent = lottos.length * LOTTO_PRICE;
      expect(lottoResult.calculateProfitRate(totalSpent)).toBe('200000000.0');
    });

    test('getResult 메서드가 결과 객체를 반환', () => {
      const result = lottoResult.getResult();
      expect(result['3개 일치'].count).toBe(0);
      expect(result['4개 일치'].count).toBe(0);
      expect(result['5개 일치'].count).toBe(0);
      expect(result['5개 일치, 보너스 볼 일치'].count).toBe(0);
      expect(result['6개 일치'].count).toBe(1);
    });
  });

  describe('발급된 로또가 5장인 경우', () => {
    let lottoResult;

    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [3, 5, 15, 25, 32, 44],
      [3, 5, 10, 11, 22, 33],
      [3, 5, 7, 10, 11, 44],
      [5, 11, 23, 34, 36, 40],
    ];
    const winningNumbers = new Lotto([3, 5, 10, 11, 31, 44]);
    const bonusNumber = 7;

    beforeEach(() => {
      lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
    });

    test('calculateTotalPrize 메서드가 정확한 총 상금을 반환', () => {
      expect(lottoResult.calculateTotalPrize()).toBe(30055000);
    });

    test('calculateProfitRate 메서드가 정확한 수익률을 반환', () => {
      const totalSpent = lottos.length * LOTTO_PRICE;
      expect(lottoResult.calculateProfitRate(totalSpent)).toBe('601100.0');
    });

    test('getResult 메서드가 결과 객체를 반환', () => {
      const result = lottoResult.getResult();
      expect(result['3개 일치'].count).toBe(1);
      expect(result['4개 일치'].count).toBe(1);
      expect(result['5개 일치'].count).toBe(0);
      expect(result['5개 일치, 보너스 볼 일치'].count).toBe(1);
      expect(result['6개 일치'].count).toBe(0);
    });
  });
});
