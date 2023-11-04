import Input from '../../src/utils/Input';
import { Console } from '@woowacourse/mission-utils';

const mockInputs = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('Input', () => {
  beforeEach(() => {
    Console.readLineAsync = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCost', () => {
    test('구입금액을 입력해 주세요. 라는 문구를 출력한다.', async () => {
      // given
      const expectedMessage = '구입금액을 입력해 주세요.\n';
      Console.readLineAsync.mockResolvedValue('1000');

      // when
      await Input.getCost();

      // then
      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
    });

    test('입력받은 값이 정수가 아니라면 에러를 던진다.', async () => {
      // given
      Console.readLineAsync.mockResolvedValue('1.1');

      // when
      const result = Input.getCost();

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });

    test('입력받은 값이 1000원 단위가 아니라면 에러를 던진다.', async () => {
      // given
      Console.readLineAsync.mockResolvedValue('1001');

      // when
      const result = Input.getCost();

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });
  });

  describe('readIntegerAsync', () => {
    test('사용자에게 메시지를 출력한다.', () => {
      // given
      const expectedMessage = '메시지';
      Console.readLineAsync.mockResolvedValue('1');

      // when
      Input.readIntegerAsync(expectedMessage);

      // then
      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
    });

    test('입력받은 값이 없거나 공백뿐이라면 에러를 던진다.', async () => {
      // given
      const inputs = ['', ' ', '  '];

      // when
      mockInputs(inputs);
      const result = Input.readIntegerAsync();

      // then
      expect(result).rejects.toThrow('[ERROR]');
    });

    test('입력받은 값이 정수가 아니라면 에러를 던진다.', async () => {
      // given
      Console.readLineAsync.mockResolvedValue('1.1');

      // when
      const result = Input.readIntegerAsync();

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });
  });
});
