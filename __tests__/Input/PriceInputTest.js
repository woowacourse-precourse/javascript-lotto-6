import { MissionUtils } from '@woowacourse/mission-utils';
import InputFactory from '../../src/Input';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('구입 금액 입력이', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const Input = InputFactory.initialize('price');
  test('1000으로 나뉘어지지 않을 경우 예외가 발생하는가?', async () => {
    const inputs = [10003];

    mockQuestions(inputs);

    await expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생하는가?', async () => {
    const inputs = [30];

    mockQuestions(inputs);

    await expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });

  test('입력되지 않은 경우 예외가 발생하는가?', async () => {
    const inputs = [' ', '', '   ', 0];

    mockQuestions(inputs);

    await expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });
});
