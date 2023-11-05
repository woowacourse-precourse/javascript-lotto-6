import Validator from '../utils/Validator.js';

describe('유효성 검사 기능 테스트', () => {
  test('유효하지 않은 구입 금액에 대한 테스트', () => {
    const purchaseAmounts = [900, 1100, -1000, 1000.5, '천원'];
    purchaseAmounts.forEach((purchaseAmount) =>
      expect(Validator.validatePurchaseAmount(purchaseAmount)).toEqual(false),
    );
  });
});
