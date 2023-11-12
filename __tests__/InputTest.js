import Input from '../src/Input.js';
import { Console } from '@woowacourse/mission-utils';

describe('Input 클래스 테스트', () => {
  let input;

  beforeEach(() => {
    input = new Input();
    jest.spyOn(Console, 'readLineAsync').mockImplementation(() => {});
  });

  describe('getPurchaseAmount 메서드', () => {
    test('유효한 입력은 숫자를 반환', async () => {
      const userInput = '1000';
      const expected = 1000;

      Console.readLineAsync.mockResolvedValue(userInput);
      const result = await input.getPurchaseAmount();
      expect(result).toEqual(expected);
    });

    test('입력이 숫자가 아닐 경우 에러 반환', async () => {
      const userInput = 'not a number';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getPurchaseAmount()).rejects.toThrow(
        '[ERROR] 구입금액은 숫자여야 합니다.',
      );
    });

    test('입력이 1000의 배수가 아닐 경우 에러 반환', async () => {
      const userInput = '1500';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getPurchaseAmount()).rejects.toThrow(
        '[ERROR] 구입금액은 1000의 배수여야 합니다.',
      );
    });
  });

  describe('getWinningNumbers 메서드', () => {
    test('유효한 당첨 번호 입력은 숫자 배열을 반환', async () => {
      const userInput = '1,2,3,4,5,6';
      const expected = [1, 2, 3, 4, 5, 6];

      Console.readLineAsync.mockResolvedValue(userInput);
      const result = await input.getWinningNumbers();
      expect(result).toEqual(expected);
    });

    test('당첨 번호가 쉼표로 구분된 6개의 숫자 형태가 아닐 경우 에러 반환', async () => {
      const userInput = '1,2,3,4,5';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getWinningNumbers()).rejects.toThrow(
        '[ERROR] 쉼표(,) 외에 문자는 입력할 수 없습니다.',
      );
    });

    test('당첨 번호가 1부터 45 사이의 숫자가 아닐 경우 에러 반환', async () => {
      const userInput = '1,2,3,4,5,46';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getWinningNumbers()).rejects.toThrow(
        '[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
      );
    });

    test('당첨 번호가 중복될 경우 에러 반환', async () => {
      const userInput = '1,2,3,4,5,5';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getWinningNumbers()).rejects.toThrow(
        '[ERROR] 당첨 번호 6개는 중복되지 않아야 합니다.',
      );
    });
  });

  describe('getBonusNumber 메서드', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    test('유효한 보너스 번호 입력은 숫자를 반환', async () => {
      const userInput = '7';
      const expected = 7;

      Console.readLineAsync.mockResolvedValue(userInput);
      const result = await input.getBonusNumber(winningNumbers);
      expect(result).toEqual(expected);
    });

    test('보너스 번호가 숫자가 아닐 경우 에러 반환', async () => {
      const userInput = 'not a number';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getBonusNumber(winningNumbers)).rejects.toThrow(
        '[ERROR] 숫자 1개를 입력해야 합니다.',
      );
    });

    test('보너스 번호가 당첨 번호와 중복될 경우 에러 반환', async () => {
      const userInput = '1';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getBonusNumber(winningNumbers)).rejects.toThrow(
        '[ERROR] 보너스 번호는 앞서 입력한 당첨 번호와 중복되지 않아야 합니다.',
      );
    });
  });
});
