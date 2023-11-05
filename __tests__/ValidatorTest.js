import Validator from '../utils/Validator.js';

const invalidPurchaseAmounts = [900, 1100, -1000, 1000.5, '천원'];
const validPurchaseAmounts = [1000, 2000, 3000, 4000, 10000];

describe('유효성 검사 기능 테스트', () => {
  test.each([
    [invalidPurchaseAmounts, Validator.validatePurchaseAmount, false],
    [validPurchaseAmounts, Validator.validatePurchaseAmount, true],
  ])('구입 금액에 대한 유효성 검사 테스트', (purchaseAmounts, validation, result) => {
    purchaseAmounts.forEach((purchaseAmount) => expect(validation(purchaseAmount)).toEqual(result));
  });
});
