import Input from '../../src/utils/Input';
import { Console } from '@woowacourse/mission-utils';

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
      const expectedMessage = '구입금액을 입력해 주세요.';
      Console.readLineAsync.mockResolvedValue('1000');

      // when
      await Input.getCost();

      // then
      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
