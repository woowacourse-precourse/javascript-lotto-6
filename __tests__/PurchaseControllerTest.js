import { MissionUtils } from '@woowacourse/mission-utils';
import PurchaseController from '../src/controller/PurchaseController.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('PurchaseController', () => {
  const purchaseController = new PurchaseController();

  test('숫자가 아닐 경우 예외 발생', async () => {
    const inputs = 'A';
    await expect(() => {
      purchaseController.validatePurchaseAmount(inputs);
    }).toThrow('[ERROR]');
  });

  test('양수가 아닐 경우 예외 발생', async () => {
    const inputs = '-5000';
    await expect(() => {
      purchaseController.validatePurchaseAmount(inputs);
    }).toThrow('[ERROR]');
  });

  test('입력이 없는 경우 예외 발생', async () => {
    const inputs = '';
    await expect(() => {
      purchaseController.validatePurchaseAmount(inputs);
    }).toThrow('[ERROR]');
  });

  test('1000 단위가 아닐 경우', async () => {
    const inputs = '1001';
    await expect(() => {
      purchaseController.validatePurchaseAmount(inputs);
    }).toThrow('[ERROR]');
  });
});
