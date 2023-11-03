import { ERROR_MESSAGES } from '../../src/constants/messages.js';
import Validator from '../../src/validators/Validator.js';

describe('유효성 검사 로직 테스트', () => {
  test('1,000으로 나누어 떨어지지 않는 구입금액', () => {
    const purchaseAmount = 8001;

    expect(() => {
      Validator.validatePurchaseAmount(purchaseAmount);
    }).toThrow(ERROR_MESSAGES.invalidAmount);
  });
  test('올바르지 않은 데이터 타입', () => {
    const purchaseAmount = 'aa';

    expect(() => {
      Validator.validatePurchaseAmount(purchaseAmount);
    }).toThrow(ERROR_MESSAGES.invalidAmount);
  });
});
