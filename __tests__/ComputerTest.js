import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from '../src/Computer.js';
import Lotto from '../src/Lotto.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('컴퓨터 기능 테스트', () => {
  test.each([
    { input: [['1000']], count: 1 },
    { input: [['10000']], count: 10 },
  ])('로또 발행 장수 테스트', async ({ input, count }) => {
    mockQuestions(input);

    const computer = new Computer();
    await computer.issueLottoForUserInput();

    expect(computer.lottos.length).toBe(count);
  });

  test('로또 결과 테스트', () => {
    const computer = new Computer();
    computer.lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([1, 8, 11, 31, 41, 42]),
      new Lotto([13, 14, 16, 38, 42, 45]),
      new Lotto([7, 11, 30, 40, 42, 43]),
      new Lotto([2, 13, 22, 32, 38, 45]),
      new Lotto([1, 3, 5, 14, 22, 45]),
    ];
    computer.winningNumbers = [1, 2, 3, 4, 5, 6];
    computer.bonusNumber = 7;

    expect(computer.getLottoResults()).toEqual([7, 0, 0, 0, 0, 1]);
  });
});
