import { MissionUtils } from '@woowacourse/mission-utils';
import InputFactory from '../../src/Input';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};
describe('보너스 숫자 입력이', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const Input = InputFactory.initialize('bonus');
  test('1~45 범위 이외의 숫자를 입력시 예외가 발생 하는가?', async () => {
    const inputs = [0, 46];

    mockQuestions(inputs);

    await expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });

  test('1글자를 초과하거나 미만일 경우 예외가 발생 하는가?', async () => {
    const inputs = ['2,3', ' ', '  '];

    mockQuestions(inputs);

    await expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });
});
