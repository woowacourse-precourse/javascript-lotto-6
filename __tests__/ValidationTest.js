import Validation from '../utils/validation.js';
import ERROR from '../constants/error.js';

describe('유효성 검사', () => {
  test('보너스 번호의 범위가 1에서 45 이내를 벗어날 경우 오류 발생', () => {
    expect(() => {
      const passInput = 1;
      const wrongInput = 46;

      expect(Validation.isWithinRange(passInput)).not.toThrow();
      expect(Validation.isWithinRange(wrongInput)).toThrow(ERROR.withinRange);
    });
  });
});
