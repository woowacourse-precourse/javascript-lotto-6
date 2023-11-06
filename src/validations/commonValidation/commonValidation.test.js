import AppError from '../../error/AppError/AppError.module';
import commonValidation from './commonValidation.module';

describe('validateCommon 테스트', () => {
  const startValidation = (inputValue) => () => commonValidation.check(inputValue);
  describe('예외 테스트', () => {
    test.each([
      {
        input: '',
        expectedErrorMessage: commonValidation.validationTypes.emptyValues.errorMessage,
      },
      {
        input: 'Some text with space',
        expectedErrorMessage: commonValidation.validationTypes.existSpaces.errorMessage,
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
