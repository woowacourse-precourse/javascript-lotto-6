import { Console } from '@woowacourse/mission-utils';
import Input from '../src/view/Input.js';
import { ERROR } from '../src/constant/constant.js';

describe('Input 클래스 테스트', () => {
  const mockConsoleReadLineAsync = (input) => {
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockResolvedValue(input);
  };

  test('getLottoBudget 함수 작동 테스트 ', async () => {
    const INPUT = '10000';
    mockConsoleReadLineAsync(INPUT);

    const result = await Input.getLottoBudget();

    expect(result).toEqual(INPUT);
  });

  test('getLottoBudget 함수 에러 테스트', async () => {
    const INPUT = '11111';
    mockConsoleReadLineAsync(INPUT);

    try {
      await Input.getLottoBudget();
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(ERROR.budget);
    }
  });
});
