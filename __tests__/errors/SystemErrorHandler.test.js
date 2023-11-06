import { Console } from '@woowacourse/mission-utils';
import systemErrorHandler from '../../src/error/handlers/systemErrorHandler';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('입력 관련 예외 처리 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('retryOnErrors 테스트', () => {
    test('첫 번째 실행은 에러가 발생하여 다시 함수가 호출되며, 두 번째 실행은 정상적으로 실행 후 값을 반환한다.', async () => {
      // given
      const executeTest = jest.fn();
      executeTest.mockRejectedValueOnce(new Error('Test Error')).mockResolvedValueOnce('Success');

      // when
      const result = await systemErrorHandler.retryOnErrors(executeTest);

      // then
      expect(executeTest).toHaveBeenCalledTimes(2);
      expect(Console.print).toHaveBeenCalledWith('Test Error');
      expect(result).toMatch('Success');
    });
  });
});
