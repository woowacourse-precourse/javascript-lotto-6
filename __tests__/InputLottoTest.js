import InputLotto from '../src/components/InputLotto';
import { Console } from '@woowacourse/mission-utils';

describe('InputLotto 클래스 테스트', () => {
  let inputLotto;

  beforeEach(() => {
    inputLotto = new InputLotto();
  });

  test('유효한 당첨 번호 입력', async () => {
    const mockConsoleReadLineAsync = jest.fn(() =>
      Promise.resolve('1,2,3,4,5,6'),
    );
    jest
      .spyOn(Console, 'readLineAsync')
      .mockImplementation(mockConsoleReadLineAsync);

    const winningNumbers = await inputLotto.inputWinningNumbers();

    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mockConsoleReadLineAsync).toHaveBeenCalled();
  });

  test('유효하지 않은 당첨 번호 입력 후 재시도', async () => {
    const mockConsoleReadLineAsync = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(''))
      .mockImplementationOnce(() => Promise.resolve('1, 2,3,4, 5,6'))
      .mockImplementationOnce(() => Promise.resolve(',1,2,3,,4,5,6,'))
      .mockImplementationOnce(() => Promise.resolve('1,2,3,4'))
      .mockImplementationOnce(() => Promise.resolve('1,2,3,4,5,46'))
      .mockImplementationOnce(() => Promise.resolve('1,2,3,4,5,5'))
      .mockImplementationOnce(() => Promise.resolve('1,2,3,4,5,6'));
    jest
      .spyOn(Console, 'readLineAsync')
      .mockImplementation(mockConsoleReadLineAsync);

    const winningNumbers = await inputLotto.inputWinningNumbers();

    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mockConsoleReadLineAsync).toHaveBeenCalledTimes(7);
  });

  test('유효한 보너스 번호 입력', async () => {
    const mockConsoleReadLineAsync = jest.fn(() => Promise.resolve('7'));
    jest
      .spyOn(Console, 'readLineAsync')
      .mockImplementation(mockConsoleReadLineAsync);

    const bonusNumber = await inputLotto.inputBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(bonusNumber).toBe(7);
    expect(mockConsoleReadLineAsync).toHaveBeenCalled();
  });

  test('유효하지 않은 보너스 번호 입력 후 재시도', async () => {
    const mockConsoleReadLineAsync = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(''))
      .mockImplementationOnce(() => Promise.resolve('a'))
      .mockImplementationOnce(() => Promise.resolve('46'))
      .mockImplementationOnce(() => Promise.resolve('6'))
      .mockImplementationOnce(() => Promise.resolve('7'));
    jest
      .spyOn(Console, 'readLineAsync')
      .mockImplementation(mockConsoleReadLineAsync);

    const bonusNumber = await inputLotto.inputBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(bonusNumber).toBe(7);
    expect(mockConsoleReadLineAsync).toHaveBeenCalledTimes(5);
  });
});
