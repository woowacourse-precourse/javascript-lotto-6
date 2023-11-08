import AppError from '../../src/errors/AppError.js';

describe('Error Console Test', () => {
  describe('에러 발생 시에 ', () => {
    test('[ERROR]가 포함되어 나오는지, ', () => {
      // given
      const errorMessage = '에러 메시지';

      // when
      const generateError = () => {
        throw new AppError(errorMessage);
      };

      // then
      expect(() => {
        generateError();
      }).toThrow(errorMessage);
    });
  });
});
