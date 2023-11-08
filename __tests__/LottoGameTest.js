import { Console, Random } from '@woowacourse/mission-utils';
import LottoGame from '../src/LottoGame.js';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickUniqueNumbersInRange);
};

describe('로또 게임 클래스 테스트', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test('로또를 5개 구입하면, 5개의 로또가 발행된다. - purchaseLotto()', async () => {
    const MOCK_PURCHASE_AMOUNT = ['5000'];
    const RANDOM_NUMBERS = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    mockQuestions(MOCK_PURCHASE_AMOUNT);
    mockRandoms(RANDOM_NUMBERS);

    await lottoGame.inputPurchaseAmount();
    lottoGame.purchaseLotto();

    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(5);
  });
});
