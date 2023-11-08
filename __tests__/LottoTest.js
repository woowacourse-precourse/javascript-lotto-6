import Lotto from '../src/Lotto';
import { ERROR_MESSAGES } from '../src/constants/Errors';

describe('로또 클래스 테스트', () => {
  describe.each([
    // 유효한 로또 번호로 테스트
    [[1, 2, 3, 4, 5, 6]],
    [[7, 8, 9, 10, 11, 12]],
    [[13, 14, 15, 16, 17, 18]],

    // 유효하지 않은 로또 번호로 테스트
    [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGES.invalidLottoNumberLength],
    [[1, 2, 3, 4, 5, 5], ERROR_MESSAGES.invalidLottoNumberDuplicate],
    [[1, 2, 'A', 4, 5, 6], ERROR_MESSAGES.invalidLottoNumberType],
    [[0, 2, 3, 47, 5, 6], ERROR_MESSAGES.invalidLottoNumberRange],
  ])('Lotto 인스턴스 테스트: %p', (numbers, errorMessage) => {
    test('로또 인스턴스 생성', () => {
      if (errorMessage) {
        expect(() => new Lotto(numbers)).toThrow(errorMessage);
      } else {
        expect(() => new Lotto(numbers)).not.toThrow();
      }
    });
  });

  describe('로또 추첨 결과 테스트', () => {
    const mockLottoResult = {
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
    };

    const mockBonusNumber = 8;

    test('각 등수별 당첨 테스트', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      const lottoTickets = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 8],
        [1, 2, 3, 4, 5, 11],
        [1, 2, 3, 4, 10, 11],
        [1, 2, 3, 14, 15],
      ];

      const evaluatedResult = lotto.evaluateLottoTickets(
        lottoTickets,
        mockBonusNumber,
        { ...mockLottoResult },
      );

      expect(evaluatedResult.first).toBe(1);
      expect(evaluatedResult.second).toBe(1);
      expect(evaluatedResult.third).toBe(1);
      expect(evaluatedResult.forth).toBe(1);
      expect(evaluatedResult.fifth).toBe(1);
    });
  });
});
