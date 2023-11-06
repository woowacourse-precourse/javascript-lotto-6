import AppError from '../../error/AppError/AppError.module';
import { COMMON_VALIDATION_TYPES, validateCommon } from './commonValidation.module';

describe('validateCommon 테스트', () => {
  const startValidation = (inputValue) => () => validateCommon(inputValue);
  describe('예외 테스트', () => {
    test.each([
      {
        input: '',
        expectedErrorMessage: COMMON_VALIDATION_TYPES.emptyValues.errorMessage,
      },
      {
        input: 'Some text with space',
        expectedErrorMessage: COMMON_VALIDATION_TYPES.existSpaces.errorMessage,
      },
    ])(
      '입력값이 "$input"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ input, expectedErrorMessage }) => {
        // then
        expect(startValidation(input)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        input: 'abc',
      },
      {
        input: '123',
      },
    ])('입력값이 "$input"일 때 에러가 발생하지 않는다.', ({ input }) => {
      // then
      expect(startValidation(input)).not.toThrow();
    });
  });
});
