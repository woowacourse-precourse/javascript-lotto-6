import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from '../src/Computer.js';

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
});
