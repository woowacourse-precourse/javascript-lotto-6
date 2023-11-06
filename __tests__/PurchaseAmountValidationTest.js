import Validator from '../src/Validator.js';
import ERROR from '../src/constants/Error.js';
import CustomError from '../src/CustomError.js';

describe('결제 금액 유효성 검사 테스트', () => {
  describe('에러 테스트', () => {
    const purchaseAmountValidator = (input) => () =>
      Validator.validatePurchaseAmount(input);
    test.each([
      {
        input: '숫자테스트',
        message: ERROR.PAYMENT_NOT_NUMBER,
      },
      {
        input: '12345',
        message: ERROR.PAYMENT_NOT_THOUSAND,
      },
    ])('입력값 $input에 대한 테스트', ({ input, message }) => {
      expect(purchaseAmountValidator(input)).toThrow(new CustomError(message));
    });
  });
  describe('통과 테스트', () => {
    const purchaseAmountValidator = (input) => () =>
      Validator.validatePurchaseAmount(input);
    test.each([
      {
        input: '1000000',
      },
      {
        input: '2000',
      },
    ])('입력값 $input에 대한 테스트', ({ input, message }) => {
      expect(purchaseAmountValidator(input)).not.toThrow();
    });
  });
});
