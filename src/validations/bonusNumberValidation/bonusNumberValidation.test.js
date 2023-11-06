import { LOTTO_RULES } from '../../constants/lottoGame.js';
import AppError from '../../error/AppError/AppError.module.js';
import bonusNumberValidation from './bonusNumberValidation.module.js';

describe('validateBonusNumber 테스트', () => {
  const startValidation =
    ({ bonusNumber, winningLottoNumber }) =>
    () =>
      bonusNumberValidation.check({ bonusNumber, winningLottoNumber });

  describe('예외 테스트', () => {
    test.each([
      {
        bonusNumber: LOTTO_RULES.minNumber - 1,
        winningLottoNumber: [2, 3, 4, 5, 6, 7],
        expectedErrorMessage: bonusNumberValidation.validationTypes.bonusNumberRange.errorMessage,
      },
      {
        bonusNumber: LOTTO_RULES.maxNumber + 1,
        winningLottoNumber: [1, 2, 3, 4, 5, 6],
        expectedErrorMessage: bonusNumberValidation.validationTypes.bonusNumberRange.errorMessage,
      },
      {
        bonusNumber: 5,
        winningLottoNumber: [1, 2, 3, 4, 5, 6],
        expectedErrorMessage:
          bonusNumberValidation.validationTypes.duplicateBonusNumber.errorMessage,
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
