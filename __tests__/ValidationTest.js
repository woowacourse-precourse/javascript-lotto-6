import Validation from '../src/domain/Validation';
import { ERROR_MESSAGES } from '../src/constants/Errors';

describe('Validation Tests', () => {
  test('숫자가 아닌 값이 입력될 경우 오류 발생', () => {
    expect(() => {
      Validation.isPurchaseMoneyValidated('100j');
    }).toThrow(ERROR_MESSAGES.invalidLottoPurchaseAmountType);
  });

  test('1000원 단위가 아닐 경우 오류 발생', () => {
    expect(() => {
      Validation.isPurchaseMoneyValidated(1501);
    }).toThrow(ERROR_MESSAGES.invalidLottoPurchaseAmount);
  });

  test('빈 값 혹은 1000원보다 작은 값을 입력했을 경우 오류 발생', () => {
    expect(() => {
      Validation.isPurchaseMoneyValidated(0);
    }).toThrow(ERROR_MESSAGES.invalidLottoPurchaseAmountZero);
  });

  test('올바른 입력에 대해서는 오류를 발생하지 않음', () => {
    expect(() => {
      Validation.isPurchaseMoneyValidated(6000);
    }).not.toThrow();
  });
});
