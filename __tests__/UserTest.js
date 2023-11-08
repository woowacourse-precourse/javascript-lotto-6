import { Console } from '@woowacourse/mission-utils';
import User from '../src/User.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User();
  });

  describe('inputMoney', () => {
    it('유효한 입력을 받았을 때 lottoCount를 정확하게 설정해야 한다.', async () => {
      Console.readLineAsync.mockResolvedValue('3000');

      await user.inputMoney();

      expect(user.lottoCount).toBe(3);
    });

    it('1000 단위가 아닌 경우', async () => {
      Console.readLineAsync.mockResolvedValue('2500');

      await expect(user.inputMoney()).rejects.toThrow();
    });

    it('음수인 경우', async () => {
      Console.readLineAsync.mockResolvedValue('-100');

      await expect(user.inputMoney()).rejects.toThrow();
    });

    it('공백인 경우', async () => {
      Console.readLineAsync.mockResolvedValue(' ');

      await expect(user.inputMoney()).rejects.toThrow();
    });

    it('소수인 경우', async () => {
      Console.readLineAsync.mockResolvedValue('100.11');

      await expect(user.inputMoney()).rejects.toThrow();
    });
  });

  describe('inputWinningNumbers', () => {
    it('유효한 입력을 받았을 때 winningNumbers를 정확하게 설정해야 한다.', async () => {
      Console.readLineAsync.mockResolvedValue('1,2,3,4,5,6');

      await user.inputWinningNumbers();

      expect(user.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('값 6개 미만', async () => {
      Console.readLineAsync.mockResolvedValue('1,2,3,4,5');

      await expect(user.inputWinningNumbers()).rejects.toThrow();
    });

    it('값 6개 초과', async () => {
      Console.readLineAsync.mockResolvedValue('1,2,3,4,5,6,7');

      await expect(user.inputWinningNumbers()).rejects.toThrow();
    });

    it('중복된 값', async () => {
      Console.readLineAsync.mockResolvedValue('1,1,2,3,4,5');

      await expect(user.inputWinningNumbers()).rejects.toThrow();
    });

    it('공백인 경우', async () => {
      Console.readLineAsync.mockResolvedValue(',');

      await expect(user.inputWinningNumbers()).rejects.toThrow();
    });
  });

  describe('inputBonusNumber', () => {
    beforeEach(async () => {
      Console.readLineAsync.mockResolvedValue('1,2,3,4,5,6');
      await user.inputWinningNumbers();
    });

    it('유효한 입력을 받았을 때 bonusNumber를 정확하게 설정해야 한다.', async () => {
      Console.readLineAsync.mockResolvedValue('7');

      await user.inputBonusNumber();

      expect(user.bonusNumber).toBe(7);
    });

    it('중복일 경우', async () => {
      Console.readLineAsync.mockResolvedValue('6');

      await expect(user.inputBonusNumber()).rejects.toThrow();
    });

    it('음수인 경우', async () => {
      Console.readLineAsync.mockResolvedValue('-1');

      await expect(user.inputBonusNumber()).rejects.toThrow();
    });

    it('공백인 경우', async () => {
      Console.readLineAsync.mockResolvedValue(' ');

      await expect(user.inputBonusNumber()).rejects.toThrow();
    });
  });
});
