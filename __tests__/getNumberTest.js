import { Console } from '@woowacourse/mission-utils';
import { Input } from '../src/domain/Input.js';
import Lotto from '../src/Lotto.js';
import { MESSAGE } from '../src/constants/Message.js';
import { validBonusNumber } from '../src/domain/ValidationInput.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

jest.mock('../src/domain/ValidationInput.js', () => ({
  validBonusNumber: jest.fn(),
}));

jest.mock('../src/Lotto.js');

describe('Input 클래스', () => {
  let input;

  beforeEach(() => {
    input = new Input();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getWinningNumber 메서드', () => {
    test('유효한 당첨 번호를 입력받으면 해당 번호를 반환한다', async () => {
      const validWinningNumbers = '1,2,3,4,5,6';
      Console.readLineAsync.mockResolvedValue(validWinningNumbers);
      Lotto.mockImplementation((numbers) => {
        if (numbers.join(',') !== validWinningNumbers) {
          throw new Error(MESSAGE.invalidWinningNumber);
        }
      });

      const winningNumbers = await input.getWinningNumber();

      expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('유효하지 않은 당첨 번호를 입력받으면 예외를 던진다', async () => {
      const invalidWinningNumbers = '1,2,3,4,5';
      Console.readLineAsync.mockResolvedValue(invalidWinningNumbers);
      Lotto.mockImplementation(() => {
        throw new Error(MESSAGE.invalidWinningNumber);
      });

      await expect(input.getWinningNumber()).rejects.toThrow(
        MESSAGE.invalidWinningNumber
      );
    });
  });

  describe('getBonusNumber 메서드', () => {
    test('유효한 보너스 번호를 입력받으면 해당 번호를 반환한다', async () => {
      const validBonusNumberInput = '7';
      Console.readLineAsync.mockResolvedValue(validBonusNumberInput);
      validBonusNumber.mockImplementation((number) => {
        if (Number(number) !== 7) {
          throw new Error(MESSAGE.invalidBonusNumber);
        }
      });

      const bonusNumber = await input.getBonusNumber();

      expect(bonusNumber).toBe(7);
    });

    test('유효하지 않은 보너스 번호를 입력받으면 예외를 던진다', async () => {
      const invalidBonusNumberInput = '49';
      Console.readLineAsync.mockResolvedValue(invalidBonusNumberInput);
      validBonusNumber.mockImplementation(() => {
        throw new Error(MESSAGE.invalidBonusNumber);
      });

      await expect(input.getBonusNumber()).rejects.toThrow(
        MESSAGE.invalidBonusNumber
      );
    });
  });
});
