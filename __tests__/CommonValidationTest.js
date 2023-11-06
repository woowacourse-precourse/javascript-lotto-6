import ERROR from '../src/constants/Error.js';
import Validator from '../src/Validator.js';
import CustomError from '../src/CustomError.js';

describe('입력값 공통 유효성 검사 테스트', () => {
  describe('에러 테스트', () => {
    const commonValidator = (input) => () =>
      Validator.validateCommonInput(input);
    test.each([
      {
        input: '',
        message: ERROR.COMMON_NOT_INPUT,
      },
      {
        input: 'space test',
        message: ERROR.COMMON_NOT_WHITESPACE,
      },
    ])('입력값 "$input"에 대한 테스트', ({ input, message }) => {
      expect(commonValidator(input)).toThrow(new CustomError(message));
    });
  });
  describe('통과 테스트', () => {
    const commonValidator = (input) => () =>
      Validator.validateCommonInput(input);
    test.each([
      {
        input: '1000000',
      },
      {
        input: 'NoErrorTest',
      },
      {
        input: '통과테스트',
      },
      {
        input: '1,2,3,4,5,6,7,8',
      },
    ])('입력값 "$input"에 대한 테스트', ({ input }) => {
      expect(commonValidator(input)).not.toThrow();
    });
  });
});
