import { Input } from '../src/domain/Input.js';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../src/constants/Message.js';
import Lotto from '../src/Lotto.js';
import {
  validAmount,
  validBonusNumber,
} from '../src/domain/ValidationInput.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

jest.mock('../src/domain/ValidationInput.js', () => ({
  validAmount: jest.fn(),
  validBonusNumber: jest.fn(),
}));

describe('Input 클래스', () => {
  describe('getAmount 메서드', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('유효한 금액을 입력받으면 해당 금액을 반환한다', async () => {
      const validInput = '5000';
      Console.readLineAsync.mockResolvedValueOnce(validInput);
      validAmount.mockImplementation((input) => {
        if (input !== validInput) {
          throw new Error(MESSAGE.invalidAmount);
        }
      });

      const input = new Input();
      await expect(input.getAmount()).resolves.toBe(validInput);
      expect(validAmount).toHaveBeenCalledWith(validInput);
    });

    test('유효하지 않은 금액을 입력받으면 에러 메시지를 출력하고 다시 입력을 요청한다', async () => {
      const invalidInput = 'abc';
      const validInput = '5000';
      Console.readLineAsync
        .mockResolvedValueOnce(invalidInput)
        .mockResolvedValueOnce(validInput);
      validAmount.mockImplementation((input) => {
        if (input !== validInput) {
          throw new Error(MESSAGE.invalidAmount);
        }
      });

      const input = new Input();
      const result = await input.getAmount();
      expect(result).toBe(validInput);
    });
  });
});
