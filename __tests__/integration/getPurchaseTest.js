import { MissionUtils } from '@woowacourse/mission-utils';
import getPurchase from '../../src/service/getPurchase.js';

const mockInput = (inputs) => {
  try {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();

      return Promise.resolve(input);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const mockPurchase = (purchase) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();

  purchase.reduce((item, number) => {
    return item.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('게임 시작 기능 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('입력값이 유효할 경우 구매기록을 반환', async () => {
    // given
    const validInput = '10000';
    const createdPurchase = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
      [3, 4, 5, 6, 7, 8],
      [1, 3, 5, 15, 21, 40],
    ];
    const parsedInput = 10000;

    mockInput(validInput);
    mockPurchase(createdPurchase);

    // when
    const result = await getPurchase(validInput);

    // then
    expect(result).toEqual(
      expect.objectContaining({
        purchaseAmount: parsedInput,
        purchasedLotto: createdPurchase,
      }),
    );
  });

  const invalidInputs = ['asdf', '0', '0000', '999', ';;;;'];

  test.each(invalidInputs)('입력값이 유효하지 않을 경우 에러를 반환', async () => {
    // given
    mockInput(invalidInputs);

    // then
    try {
      await getPurchase();
    } catch (error) {
      expect(error.message).toEqual(expect.stringContaining('[ERROR]'));
    }
  });
});
