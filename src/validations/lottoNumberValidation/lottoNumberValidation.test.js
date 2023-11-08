import { LOTTO_RULES } from '../../constants/lottoGame.js';
import AppError from '../../error/AppError/AppError.module.js';
import lottoNumberValidation from './lottoNumberValidation.module.js';

describe('validateLottoNumber 테스트', () => {
  const startValidation = (lottoNumbers) => () => lottoNumberValidation.check(lottoNumbers);

  describe('예외 테스트', () => {
    test.each([
      {
        lottoNumbers: [1, 2, 3, 4, 5],
        expectedErrorMessage: lottoNumberValidation.validationTypes.lottoSize.errorMessage,
      },
      {
        lottoNumbers: [1, 2, 3, 4, 5, 6, 7],
        expectedErrorMessage: lottoNumberValidation.validationTypes.lottoSize.errorMessage,
      },
      {
        lottoNumbers: [LOTTO_RULES.minNumber - 1, 2, 3, 4, 5, 6],
        expectedErrorMessage: lottoNumberValidation.validationTypes.lottoNumberRange.errorMessage,
      },
      {
        lottoNumbers: [1, 2, 3, 4, 5, LOTTO_RULES.maxNumber + 1],
        expectedErrorMessage: lottoNumberValidation.validationTypes.lottoNumberRange.errorMessage,
      },
      {
        lottoNumbers: [1, 2, 3, 4, 5, 5],
        expectedErrorMessage: lottoNumberValidation.validationTypes.duplicateNumber.errorMessage,
      },
    ])(
      '로또 번호가 "$lottoNumbers"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ lottoNumbers, expectedErrorMessage }) => {
        // given - when - then
        expect(startValidation(lottoNumbers)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        lottoNumbers: [1, 2, 3, 4, 5, 6],
      },
    ])('로또 번호가 "$lottoNumbers"일 때 에러가 발생하지 않는다.', ({ lottoNumbers }) => {
      // given - when - then
      expect(startValidation(lottoNumbers)).not.toThrow();
    });
  });
});
