import Validation from '../src/Validation.js';
import { ERROR_MESSAGE } from '../src/constants.js';

describe('입력에 대한 유효성 test', () => {
  const validateAndExpect = (validateFunction, input, expectedValue) => {
    const result = validateFunction(input);
    expect(result).toEqual(expectedValue);
  };

  const validateAndExpectError = (validateFunction, input, errorMessage) => {
    expect(() => {
      validateFunction(input);
    }).toThrow(Error(errorMessage));
  };

  describe('구입금액에 대한 테스트', () => {
    test('유효한 금액을 입력했을 경우', () => {
      validateAndExpect(Validation.validatePurchaseAmount, 3000, 3000);
    });

    test('1000보다 작은 금액을 입력했을 경우', () => {
      validateAndExpectError(Validation.validatePurchaseAmount, 999, ERROR_MESSAGE.invalidPusrchaseAmount);
    });

    test('1,000원으로 나누어 떨어지지 않는 경우', () => {
      validateAndExpectError(Validation.validatePurchaseAmount, 1001, ERROR_MESSAGE.invalidPusrchaseAmount);
    });
  });

  describe('당첨 번호에 대한 테스트', () => {
    test('유효한 당첨 번호를 입력했을 경우', () => {
      validateAndExpect(Validation.validateWinningNumbers, '1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]);
    });

    test('당첨 번호를 6개 입력하지 않았을 경우', () => {
      validateAndExpectError(Validation.validateWinningNumbers, '1,2,3,4,5', ERROR_MESSAGE.duplicationWinningNumbers);
    });

    test('당첨 번호가 중복되었을 경우', () => {
      validateAndExpectError(Validation.validateWinningNumbers, '1,2,3,4,5,5', ERROR_MESSAGE.duplicationWinningNumbers);
    });

    test('당첨 번호에 소수가 포함되었을 경우', () => {
      validateAndExpectError(
        Validation.validateWinningNumbers,
        '1,2,3,4,5,3.5',
        ERROR_MESSAGE.duplicationWinningNumbers,
      );
    });

    test('당첨 번호에 1~45사이가 아닌 숫자가 포함되었을 경우', () => {
      validateAndExpectError(
        Validation.validateWinningNumbers,
        '1,2,3,46,5,4',
        ERROR_MESSAGE.duplicationWinningNumbers,
      );
    });
  });

  describe('보너스 번호에 대한 테스트', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    test('유효한 보너스 번호를 입력했을 경우', () => {
      const result = Validation.validateBonusNumber(7, winningNumbers);
      expect(result).toBe(7);
    });

    test('당첨 번호와 중복되었을 경우', () => {
      expect(() => {
        Validation.validateBonusNumber(6, winningNumbers);
      }).toThrow(Error(ERROR_MESSAGE.duplicationBonusNumber));
    });

    test('보너스 번호가 1~45사이가 아닌 숫자일 경우', () => {
      expect(() => {
        Validation.validateBonusNumber(46, winningNumbers);
      }).toThrow(Error(ERROR_MESSAGE.duplicationBonusNumber));
    });
  });
});
