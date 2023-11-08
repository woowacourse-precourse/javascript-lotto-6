import CustomError from '../../src/errors/error.js';

describe('에러 테스트', () => {
  describe('에러가 발생하면', () => {
    test('[ERROR] 문구를 포함한 에러 메시지를 출력한다.', () => {
      // given
      const errorMessage = '에러 메시지입니다. :)';

      // when
      const createError = () => {
        throw new CustomError(errorMessage);
      };

      // then
      expect(() => {
        createError();
      }).toThrow(errorMessage);
    });
  });
});
