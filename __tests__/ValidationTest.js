import {
  validatePurchasingAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from '../src/Validation';
import { INPUT_ERROR_MESSAGE, SYMBOL } from '../src/constants/constants';

describe('ValidationModule', () => {
  describe('validatePurchasingAmount', () => {
    it('구매금액 1000단위 적절하게 입력', () => {
      const amount = '3000';
      expect(() =>
        validatePurchasingAmount(amount, INPUT_ERROR_MESSAGE),
      ).not.toThrow();
    });

    it('구매금액에 문자열이 들어왔을 시 에러 발생', () => {
      const amount = 'abcd, 1, 23, 4, 5';
      expect(() =>
        validatePurchasingAmount(amount, INPUT_ERROR_MESSAGE),
      ).toThrowError(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
    });

    it('구매금액이 1000으로 나누어떨어지지 않을 떄 에러를 발생시킵니다.', () => {
      const amount = '990714';
      expect(() =>
        validatePurchasingAmount(amount, INPUT_ERROR_MESSAGE),
      ).toThrowError(INPUT_ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
    });
  });

  describe('validateWinningNumbers', () => {
    it('숫자는 서로 달라야합니다.', () => {
      const winningNumbers = '1,2,3,4,5,6';
      expect(() =>
        validateWinningNumbers(
          winningNumbers,
          SYMBOL.COMMA,
          INPUT_ERROR_MESSAGE,
        ),
      ).not.toThrow();
    });

    it('당첨 번호는 1~45 숫자의 사이여야합니다.', () => {
      const winningNumbers = '1,2,3,4,46';
      expect(() =>
        validateWinningNumbers(
          winningNumbers,
          SYMBOL.COMMA,
          INPUT_ERROR_MESSAGE,
        ),
      ).toThrowError(INPUT_ERROR_MESSAGE.WINNING_NUMBERS_ERROR);
    });

    it('당첨 번호는 숫자로 구성되어야 합니다.', () => {
      const winningNumbers = '1,2,3,abc,5,6';
      expect(() =>
        validateWinningNumbers(
          winningNumbers,
          SYMBOL.COMMA,
          INPUT_ERROR_MESSAGE,
        ),
      ).toThrowError(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
    });
  });

  describe('validateBonusNumber', () => {
    it('입력한 보너스 번호는 당첨 번호와 달라야합니다.', () => {
      const bonusNumber = '7';
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() =>
        validateBonusNumber(bonusNumber, winningNumbers, INPUT_ERROR_MESSAGE),
      ).not.toThrow();
    });

    it('보너스 번호는 숫자여야 합니다.', () => {
      const bonusNumber = 'abc';
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() =>
        validateBonusNumber(bonusNumber, winningNumbers, INPUT_ERROR_MESSAGE),
      ).toThrowError(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
    });

    it('입력한 보너스 번호는, 당첨 번호와 겹치면 안됩니다.', () => {
      const bonusNumber = '5';
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() =>
        validateBonusNumber(bonusNumber, winningNumbers, INPUT_ERROR_MESSAGE),
      ).toThrowError(INPUT_ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    });
  });
});
