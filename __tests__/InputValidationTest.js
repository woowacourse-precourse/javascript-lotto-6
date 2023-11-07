import InputValidation from '../src/controller/InputValidation'; 
import { bonusError, LengthError, PriceError } from '../src/error/InputErrors';

describe('InputValidation', () => {
  // 로또금액 메서드 테스트
  describe('isPrice', () => {
    it('유효한 가격은 예외를 발생하지 않는다', () => {
      expect(() => InputValidation.isPrice(6000)).not.toThrow();
    });

    it('유효하지 않은 가격은 예외를 발생한다', () => {
      expect(() => InputValidation.isPrice('abc')).toThrow();
      expect(() => InputValidation.isPrice(1234)).toThrow();
    });
  });

  // 보너스숫자 메서드 테스트
  describe('isBonus', () => {
    it('유효한 보너스 번호는 예외를 발생하지 않는다', () => {
      expect(() => InputValidation.isBonus(7)).not.toThrow();
    });

    it('유효하지 않은 보너스 번호는 예외를 발생한다', () => {
      expect(() => InputValidation.isBonus('abc')).toThrow(bonusError);
    });
  });

  // 당첨번호 메서드 테스트
  describe('isWinningArray', () => {
    it('유효한 당첨 번호 배열은 예외를 던지지 않아야 함', () => {
      const validArray = [1, 2, 3, 4, 5, 6];
      expect(() => InputValidation.isWinningArray(validArray)).not.toThrow();
    });

    it('유효하지 않은 당첨 번호 배열은 예외를 던져야한다', () => {
      const invalidArray1 = [1, 2, 3, 4, 5];
      const invalidArray2 = [1, 2, 'abc', 4, 5, 6];
      expect(() => InputValidation.isWinningArray(invalidArray1)).toThrow(LengthError);
      expect(() => InputValidation.isWinningArray(invalidArray2)).toThrow(TypeError);
    });
  });
});
