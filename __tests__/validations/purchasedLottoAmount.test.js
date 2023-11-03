/* eslint-disable max-lines-per-function */
import lottoPurchase from '../../src/domain/lottoPurchase.js';
import AppError from '../../src/error/customErrors/AppError.js';
import {
  PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES,
  validatePurchasedLottoAmount,
} from '../../src/validations/purchasedLottoAmountValidation.js';

describe('validatePurchasedLottoAmount 테스트', () => {
  const startValidation = (inputValue) => () => validatePurchasedLottoAmount(inputValue);

  describe('예외 테스트', () => {
    test.each([
      {
        input: lottoPurchase.constants.minRange - 2000,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: lottoPurchase.constants.minRange - 1,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: lottoPurchase.constants.maxRange + 1,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: lottoPurchase.constants.unit + 100,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.lottoUnit.errorMessage,
      },
    ])(
      '구매 로또 금액이 $input원 일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ input, expectedErrorMessage }) => {
        // TODO: given - when - then 추가
        expect(startValidation(input)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        input: lottoPurchase.constants.minRange,
      },
      {
        input: lottoPurchase.constants.maxRange,
      },
      {
        input: lottoPurchase.constants.unit,
      },
    ])('구매 로또 금액이 $input원 일 때 에러가 발생하지 않는다.', ({ input }) => {
      // TODO: given - when - then 추가
      expect(startValidation(input)).not.toThrow();
    });
  });
});
