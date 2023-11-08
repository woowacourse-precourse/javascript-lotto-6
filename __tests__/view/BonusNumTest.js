import Validator from '../../src/utils/Validator.js';

describe('보너스 번호 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('보너스 번호가 1-45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => validator.bonusNumberValidator('77')).toThrow();
  });

  describe('보너스 번호 타입 검증 테스트', () => {
    test('보너스 번호가 문자이면 예외가 발생한다.', () => {
      expect(() => validator.bonusNumberValidator('abc')).toThrow();
    });

    test('보너스 번호가 특수 문자이면 예외가 발생한다.', () => {
      expect(() => validator.bonusNumberValidator('!?*#')).toThrow();
    });
  });
});
