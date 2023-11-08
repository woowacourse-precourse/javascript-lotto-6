import { MissionUtils } from '@woowacourse/mission-utils';
import BonusController from '../src/controller/BonusController.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('BonusController', () => {
  const bonusController = new BonusController();

  test('숫자가 아닐 경우 예외 발생', async () => {
    const inputs = 'A';
    await expect(() => {
      bonusController.validateBonusNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('양수가 아닐 경우 예외 발생', async () => {
    const inputs = '-39';
    await expect(() => {
      bonusController.validateBonusNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('입력이 없는 경우 예외 발생', async () => {
    const inputs = '';
    await expect(() => {
      bonusController.validateBonusNumber(inputs);
    }).toThrow('[ERROR]');
  });

  test('1~45의 범위를 넘어가는 경우 예외 발생', async () => {
    const inputs = '48';
    await expect(() => {
      bonusController.validateBonusNumber(inputs);
    }).toThrow('[ERROR]');
  });
});
