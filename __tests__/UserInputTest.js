import { Console } from '@woowacourse/mission-utils';
import UserInput from '../src/UserInput.js';

describe('UserInput 클래스 테스트 ', () => {
  let userInput;

  beforeEach(() => {
    userInput = new UserInput();
  });

  test('amountInput input 값을 잘 출력하는지', async () => {
    const mockConsoleInput = jest.spyOn(Console, 'readLineAsync');

    mockConsoleInput.mockResolvedValue('10000');

    const amount = await userInput.amountInput();
    expect(amount).toBe('10000');

    expect(mockConsoleInput).toHaveBeenCalledWith('');
  });

});