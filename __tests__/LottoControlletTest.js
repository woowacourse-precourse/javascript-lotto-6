import LottoController from '../src/controller/LottoController.js';
import inputView from '../src/view/inputView.js';

jest.mock('../src/view/inputView.js'); // Replace with the correct path

inputView.winningNumbers = jest.fn();
inputView.bonusNumber = jest.fn();

describe('LottoController 클래스 테스트', () => {
  let controller;

  beforeEach(() => {
    controller = new LottoController();
    jest.clearAllMocks();
  });

  test('getPurchaseAmount 메소드 검증', async () => {
    inputView.purchaseAmount.mockResolvedValue('5000');

    await controller.getPurchaseAmount();

    expect(controller.count).toBe(5);
    expect(inputView.purchaseAmount).toBeCalled();
  });

  test('getWinningNumbers 메소드 검증', async () => {
    inputView.winningNumbers.mockResolvedValue('1,2,3,4,5,6');

    await controller.getWinningNumbers();

    expect(controller.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(inputView.winningNumbers).toBeCalled();
  });

  test('getBonusNumber 메소드 검증', async () => {
    inputView.bonusNumber.mockResolvedValue('7');
    controller.winningNumbers = [1, 2, 3, 4, 5, 6];

    await controller.getBonusNumber();
    expect(controller.bonusNumber).toBe(7);
    expect(inputView.bonusNumber).toBeCalled();
  });

  test('calculateMatchCount 메소드 검증', () => {
    controller.lottoNumbersList = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    controller.winningNumbers = [1, 2, 3, 4, 5, 6];

    controller.calculateMatchCount();

    expect(controller.result[1]).toBe(1);
    expect(controller.result[2]).toBe(0);
    expect(controller.result[3]).toBe(0);
    expect(controller.result[4]).toBe(0);
    expect(controller.result[5]).toBe(0);
  });
});
