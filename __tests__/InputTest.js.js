import { Console } from '@woowacourse/mission-utils';
import Input from '../src/Input.js';

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('입력 유효성 테스트', () => {
  test('입력된 값이 없을 때, 예외가 발생한다.', () => {
    const input = '';
    mockQuestions(input);
    expect(() => new Input().read()).rejects.toThrow(
      '[ERROR] 입력이 없습니다.'
    );
  });
});
