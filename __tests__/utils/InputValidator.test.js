import { ERROR_MESSAGES } from '../../src/constants/ErrorMessages';
import InputValidator from '../../src/utils/InputValidator';

describe('InputValidator 클래스', () => {
  describe('validatePurchaseAmount 메서드', () => {
    test('금액이 비어 있을 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('');
      }).toThrow(ERROR_MESSAGES.INVALID_FORMAT);
    });

    test('금액이 숫자가 아닐 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('1000원');
      }).toThrow(ERROR_MESSAGES.INVALID_FORMAT);
    });

    test('금액이 1000원 단위가 아닐 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('2500');
      }).toThrow(ERROR_MESSAGES.INVALID_AMOUNT);
    });

    test('금액이 음수일 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('-1000');
      }).toThrow(ERROR_MESSAGES.INVALID_FORMAT);
    });

    test('금액이 1000원 이상이 아닐 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('999');
      }).toThrow(ERROR_MESSAGES.INVALID_AMOUNT);
    });
  });

  describe('validateWinningNumbers 메서드', () => {
    test('당첨 번호가 6개가 아닐 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,2,3,4,5');
      }).toThrow(ERROR_MESSAGES.INVALID_NUMBERS);
    });

    test('당첨 번호에 중복이 있을 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,1,2,3,4,5');
      }).toThrow(ERROR_MESSAGES.INVALID_NUMBERS);
    });

    test('숫자 문자열이 비어 있을 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,2, ,4,5,6');
      }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });

    test('숫자가 범위 밖일 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('0,2,3,4,5,6');
      }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });

    test('문자열에 숫자가 아닌 문자가 포함되어 있을 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,2,three,4,5,6');
      }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });
  });

  describe('validateBonusNumber 메서드', () => {
    test('보너스 번호가 범위 밖일 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateBonusNumber('46', '1,2,3,4,5,6');
      }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });

    test('보너스 번호가 당첨 번호와 중복될 때 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateBonusNumber('1', '1,2,3,4,5,6');
      }).toThrow(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    });

    test('보너스 번호가 숫자가 아닌 문자열이 들어올경우 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateBonusNumber('string', '1,2,3,4,5,6');
      }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });
  });
});
