/* eslint-disable max-lines-per-function */
import { LOTTO_GAME_TERMS } from '../../src/constants/lottoGame.js';
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
        input: LOTTO_GAME_TERMS.purchasedLottoPrice.minRange - 2000,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: LOTTO_GAME_TERMS.purchasedLottoPrice.minRange - 1,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: LOTTO_GAME_TERMS.purchasedLottoPrice.maxRange + 1,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.amountRange.errorMessage,
      },
      {
        input: LOTTO_GAME_TERMS.purchasedLottoPrice.unit + 100,
        expectedErrorMessage: PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES.lottoUnit.errorMessage,
      },
    ])(
      '구매 로또 금액이 $input원 일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ input, expectedErrorMessage }) => {
        expect(startValidation(input)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        input: LOTTO_GAME_TERMS.purchasedLottoPrice.minRange,
      },
      {
        input: LOTTO_GAME_TERMS.purchasedLottoPrice.maxRange,
      },
      {
        input: LOTTO_GAME_TERMS.purchasedLottoPrice.unit,
      },
    ])('구매 로또 금액이 $input원 일 때 에러가 발생하지 않는다.', ({ input }) => {
      expect(startValidation(input)).not.toThrow();
    });
  });
});
