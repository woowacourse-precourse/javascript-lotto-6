import lottoPurchase from '../../domain/lottoPurchase/lottoPurchase.module.js';
import AppError from '../../error/AppError/AppError.module.js';
import {
  PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES,
  validatePurchasedLottoAmount,
} from './purchasedLottoAmountValidation.module.js';

describe('validatePurchasedLottoAmount 테스트', () => {
  const startValidation = (inputValue) => () => validatePurchasedLottoAmount(inputValue);

  describe('예외 테스트', () => {
    test.each([
      {
        input: lottoPurchase.constants.minAmount - 2000,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: lottoPurchase.constants.minAmount - 1,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: lottoPurchase.constants.maxAmount + 1,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: lottoPurchase.constants.unit + 100,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.lottoUnit.errorMessage,
      },
    ])(
      '구매 로또 금액이 $input원 일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ input, expectedErrorMessage }) => {
        // given - when - then
        expect(startValidation(input)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        input: lottoPurchase.constants.minAmount,
      },
      {
        input: lottoPurchase.constants.maxAmount,
      },
      {
        input: lottoPurchase.constants.unit,
      },
    ])('구매 로또 금액이 $input원 일 때 에러가 발생하지 않는다.', ({ input }) => {
      // given - when - then
      expect(startValidation(input)).not.toThrow();
    });
  });
});
