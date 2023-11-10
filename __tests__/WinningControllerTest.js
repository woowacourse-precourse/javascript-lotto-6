import { MissionUtils } from '@woowacourse/mission-utils';
import WinningController from '../src/controller/WinningController.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('WinningController', () => {
  const winningController = new WinningController();

  test('숫자가 아닐 경우 예외 발생', async () => {
    const inputs = 'A,2,3,4,5,6';
    await expect(() => {
      winningController.validateWinningNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('양수가 아닐 경우 예외 발생', async () => {
    const inputs = '1,2,3,4,5,-3';
    await expect(() => {
      winningController.validateWinningNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('입력이 없는 경우 예외 발생', async () => {
    const inputs = '';
    await expect(() => {
      winningController.validateWinningNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('숫자의 개수가 6개가 아닐 경우 예외 발생', async () => {
    const inputs = '1,2,3';
    await expect(() => {
      winningController.validateWinningNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('중복된 숫자가 있는 경우 예외 발생', async () => {
    const inputs = '1,2,3,4,5,5';
    await expect(() => {
      winningController.validateWinningNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('1~45의 범위를 넘어가는 경우 예외 발생', async () => {
    const inputs = '1,2,3,4,5,46';
    await expect(() => {
      winningController.validateWinningNumber(inputs);
    }).toThrow('[ERROR]');
  });
});
