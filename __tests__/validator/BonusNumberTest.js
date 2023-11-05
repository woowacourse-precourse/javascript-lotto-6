import bonusNumberValidator from '../../src/validator/bonusNumberValidator.js';

describe('보너스 번호 테스트', () => {
  const winningNumbers = ['1', '2', '3', '4', '5', '6'];

  describe('보너스 번호가 숫자가 아닌 경우 테스트', () => {
    test('올바른 보너스번호 테스트', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '40' });
      }).not.toThrow();
    });

    test('보너스 번호가 빈값인 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '' });
      }).toThrow();
    });

    test('보너스 번호에 문자가 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '4j' });
      }).toThrow();
    });

    test('보너스 번호에 문자가 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '4십' });
      }).toThrow();
    });

    test('보너스 번호에 공백이 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: ' 6 ' });
      }).toThrow();
    });

    test('보너스 번호에 음수가 포함된 경우', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '-6' });
      }).toThrow();
    });
  });

  describe('보너스 번호 범위 테스트', () => {
    test('보너스 번호가 올바른 범위안에 있는 경우 테스트', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '40' });
      }).not.toThrow();
    });

    test('보너스 번호가 범위밖인 0인 경우 테스트', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '0' });
      }).toThrow();
    });

    test('보너스 번호가 범위밖인 99인 경우 테스트', () => {
      expect(() => {
        bonusNumberValidator.checkBonusNumber({ winningNumbers, bonusNumber: '99' });
      }).toThrow();
    });
  });
});
