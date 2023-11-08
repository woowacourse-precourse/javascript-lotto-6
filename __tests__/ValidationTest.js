import {
  validatePurchaseAmount,
  validateBonusNumber,
} from '../src/utils/validate';
import { ERROR_MESSAGE } from '../src/constants/messages';

describe('입력값 검증 테스트', () => {
  describe('구입 금액 검증 테스트', () => {
    test('로또 구입 금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
      expect(() => {
        validatePurchaseAmount('1001');
      }).toThrow(ERROR_MESSAGE.invalidUnit);
    });

    test('구입 금액에 숫자가 아닌 값이 입력되면 예외가 발생한다.', () => {
      expect(() => {
        validatePurchaseAmount('a');
      }).toThrow(ERROR_MESSAGE.invalidType);
    });

    test('구입 금액이 1,000원 미만이면 예외가 발생한다.', () => {
      expect(() => {
        validatePurchaseAmount('0');
      }).toThrow(ERROR_MESSAGE.invalidAmount);
    });
  });

  describe('보너스 번호 검증 테스트', () => {
    test('보너스 번호가 당첨 번호에 포함되면 예외가 발생한다.', () => {
      expect(() => {
        validateBonusNumber('1', [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.invalidBonusNumber);
    });

    test('보너스 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        validateBonusNumber('46', [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.invalidLottoRange);
    });

    test('보너스 번호가 정수가 아니면 예외가 발생한다.', () => {
      expect(() => {
        validateBonusNumber('1.2', [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.invalidInteger);
    });

    test('보너스 번호에 숫자가 아닌 값이 입력되면 예외가 발생한다.', () => {
      expect(() => {
        validateBonusNumber('a', [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.invalidType);
    });
  });
});
