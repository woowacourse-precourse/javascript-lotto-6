import ProcessLotto from '../src/ProcessLotto.js';
import LottoError from '../src/error/LottoError.js';

describe('ProcessLotto 클래스 테스트', () => {
  let processLotto;

  beforeEach(() => {
    processLotto = new ProcessLotto();
  });

  describe('setWinningNumber() 메서드', () => {
    test('당첨 번호를 설정해야 한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      processLotto.setWinningNumber(numbers);
      expect(processLotto.getWinningNumber()).toEqual(numbers);
    });
  });

  describe('setWinningBonus() 메서드', () => {
    test('보너스 번호를 설정해야 한다.', () => {
      const bonusNumber = 7;
      processLotto.setWinningBonus(bonusNumber);
      expect(processLotto.getWinningBonus()).toBe(bonusNumber);
    });
  });

  describe('setLottoPieces() 메서드', () => {
    test('로또 구매 개수를 설정해야 한다.', () => {
      const pieces = 10;
      processLotto.setLottoPieces(pieces);
      expect(processLotto.getLottoPieces()).toBe(pieces);
    });
  });

  describe('setGuessNumbers() 메서드', () => {
    test('추측한 로또 번호를 설정해야 한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      processLotto.setGuessNumbers(numbers);
      expect(processLotto.getGuessNumbers()).toEqual(numbers);
    });
  });

  describe('validateBonusNumber() 메서드', () => {
    test('유효한 보너스 번호인지 확인해야 한다.', () => {
      const invalidNumber = 'abc';
      expect(() => processLotto.validateBonusNumber(invalidNumber)).toThrow(
        LottoError,
      );

      const outOfRangeNumber = 50;
      expect(() => processLotto.validateBonusNumber(outOfRangeNumber)).toThrow(
        LottoError,
      );

      const validNumber = 7;
      expect(() => processLotto.validateBonusNumber(validNumber)).not.toThrow();
    });
  });

  describe('generateLottoNumber() 메서드', () => {
    test('로또 번호가 정상적으로 생성되어야 한다.', () => {
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0.5);
      const result = processLotto.generateLottoNumber();

      expect(result).toBe('[1, 2, 3, 4, 5, 6]');
      expect(processLotto.getGuessNumbers()).toEqual([[1, 2, 3, 4, 5, 6]]);

      mockRandom.mockRestore();
    });
  });
});
