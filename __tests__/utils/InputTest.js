import { Console } from '@woowacourse/mission-utils';
import Input from '../../src/utils/Input';

describe('Input클래스 테스트', () => {
  beforeEach(() => {
    Console.readLineAsync = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('readNonEmptyAsync', () => {
    test('메시지를 출력한다.', async () => {
      // given
      const expectedMessage = 'test';

      // when
      Console.readLineAsync.mockResolvedValue('1000');
      await Input.readNonEmptyAsync('test');

      // then
      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
    });

    test('입력받은 값이 비어있는 값이면 예외가 발생한다.', async () => {
      // given
      // when
      Console.readLineAsync.mockResolvedValue('');

      // then
      await expect(Input.readNonEmptyAsync('test')).rejects.toThrow('[ERROR]');
    });
  });
});
