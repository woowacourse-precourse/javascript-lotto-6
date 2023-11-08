import { asyncFnHandlerWithError } from '../../src/utils/asyncFnHandlerWithError.js';
import { OutputView } from '../../src/views/OutputView.js';

jest.mock('../../src/views/OutputView.js', () => ({
  OutputView: {
    printLine: jest.fn(),
  },
}));

describe('비동기 제어 함수 asyncFnHandlerWithError에 대한 테스트', () => {
  test('비동기 함수를 정상적으로 불러야한다', async () => {
    const mockAsyncFn = jest.fn().mockResolvedValue('Success');
    const context = { someValue: 'context' };

    const result = await asyncFnHandlerWithError(mockAsyncFn, context);

    expect(result).toBe('Success');
    expect(mockAsyncFn).toHaveBeenCalled();
    expect(OutputView.printLine).not.toHaveBeenCalled();
  });

  test('에러를 출력하고 다시 비동기 함수가 작동되어야한다', async () => {
    const error = new Error('Error');
    const mockAsyncFn = jest.fn().mockRejectedValueOnce(error).mockResolvedValueOnce('Success');
    const context = { someValue: 'context' };

    const result = await asyncFnHandlerWithError(mockAsyncFn, context);

    expect(mockAsyncFn).toHaveBeenCalledTimes(2);
    expect(OutputView.printLine).toHaveBeenCalledWith(error.message);
    expect(result).toBe('Success');
  });
});
