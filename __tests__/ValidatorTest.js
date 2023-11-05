import Validator from '../utils/Validator.js';

describe('유효성 검사 기능 테스트', () => {
  test('유효하지 않은 구입 금액에 대한 테스트', () => {
    const invalidPurchaseAmounts = [900, 1100, -1000, 1000.5, '천원'];
    invalidPurchaseAmounts.forEach((invalidPurchaseAmount) =>
      expect(Validator.validatePurchaseAmount(invalidPurchaseAmount)).toEqual(false),
    );
  });
  test('유효한 구입 금액에 대한 테스트', () => {
    const validPurchaseAmounts = [1000, 2000, 3000, 4000, 10000];
    validPurchaseAmounts.forEach((validPurchaseAmount) =>
      expect(Validator.validatePurchaseAmount(validPurchaseAmount)).toEqual(true),
    );
  });
});
