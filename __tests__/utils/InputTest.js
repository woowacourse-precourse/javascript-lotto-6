import Input from '../../src/utils/Input';
import { Console } from '@woowacourse/mission-utils';
import Validatable from '../../src/utils/Validatable';

const mockInput = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => Promise.resolve(input));
};

describe('Input클래스 테스트', () => {
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

    test('입력받은 값이 정수가 아니라면 예외가 발생한다.', async () => {
      // given
      Console.readLineAsync.mockResolvedValue('1.1');

      // when
      const result = Input.getCost();

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });

    test('입력받은 값이 1000원 단위가 아니라면 예외가 발생한다.', async () => {
      // given
      Console.readLineAsync.mockResolvedValue('1001');

      // when
      const result = Input.getCost();

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });
  });

  describe('readValidatableAsync', () => {
    test('입력받은 값이 비어있지 않다면 Validatable 객체를 반환한다.', async () => {
      // given
      mockInput('test');

      // when
      const result = await Input.readValidatableAsync('test');

      // then
      expect(result).toBeInstanceOf(Validatable);
    });

    test('입력받은 값이 비어있다면 예외가 발생한다.', async () => {
      // given
      mockInput('');

      // when
      const result = Input.readValidatableAsync('test');

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });
  });
});
