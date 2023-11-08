import CustomError from '../../src/exceptions/CustomError.js';

describe('CustomError 클래스 테스트', () => {
  test('에러 헤더 [ERROR]를 포함한 메시지를 출력한다.', () => {
    // given
    const expectedMessage = '[ERROR] test';

    // when
    const result = new CustomError('test');

    // then
    expect(result.message).toBe(expectedMessage);
  });
});
