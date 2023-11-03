/* eslint-disable max-lines-per-function */

import { LOTTO_RULES } from '../../src/constants/lottoGame.js';
import AppError from '../../src/error/customErrors/AppError.js';
import {
  BONUS_NUMBER_VALIDATION_TYPES,
  validateBonusNumber,
} from '../../src/validations/bonusNumberValidation.js';

describe('validateBonusNumber 테스트', () => {
  const startValidation =
    ({ bonusNumber, winningLottoNumber }) =>
    () =>
      validateBonusNumber({ bonusNumber, winningLottoNumber });

  describe('예외 테스트', () => {
    test.each([
      {
        bonusNumber: LOTTO_RULES.minNumber - 1,
        winningLottoNumber: [2, 3, 4, 5, 6, 7],
        expectedErrorMessage: BONUS_NUMBER_VALIDATION_TYPES.bonusNumberRange.errorMessage,
      },
      {
        bonusNumber: LOTTO_RULES.maxNumber + 1,
        winningLottoNumber: [1, 2, 3, 4, 5, 6],
        expectedErrorMessage: BONUS_NUMBER_VALIDATION_TYPES.bonusNumberRange.errorMessage,
      },
      {
        bonusNumber: 5,
        winningLottoNumber: [1, 2, 3, 4, 5, 6],
        expectedErrorMessage: BONUS_NUMBER_VALIDATION_TYPES.duplicateBonusNumber.errorMessage,
      },
    ])(
      '보너스 번호가 "$bonusNumber", 로또 번호가 "$winningLottoNumber"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ bonusNumber, winningLottoNumber, expectedErrorMessage }) => {
        // given - when - then
        expect(startValidation({ bonusNumber, winningLottoNumber })).toThrow(
          new AppError(expectedErrorMessage),
        );
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        bonusNumber: 7,
        winningLottoNumber: [1, 2, 3, 4, 5, 6],
      },
    ])(
      '보너스 번호가 "$bonusNumber", 로또 번호가 "$winningLottoNumber"일 때 에러가 발생하지 않는다.',
      ({ bonusNumber, winningLottoNumber }) => {
        // given - when - then
        expect(startValidation({ bonusNumber, winningLottoNumber })).not.toThrow();
      },
    );
  });
});
