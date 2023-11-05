import bonusNumberValidator from '../../src/validator/bonusNumberValidator.js';

describe('보너스 번호 테스트', () => {
  describe('보너스 번호가 숫자가 아닌 경우 테스트', () => {
    test('올바른 보너스번호 테스트', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber('40');
      }).not.toThrow();
    });

    test('보너스 번호가 빈값인 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber('');
      }).toThrow();
    });

    test('보너스 번호에 문자가 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber('4j');
      }).toThrow();
    });

    test('보너스 번호에 문자가 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber('4십');
      }).toThrow();
    });

    test('보너스 번호에 공백이 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber(' 6 ');
      }).toThrow();
    });

    test('보너스 번호에 음수가 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber('-6');
      }).toThrow();
    });
  });
});
