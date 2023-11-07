/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import * as Statistics from '../src/utils/Statistics.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

describe('로또 전체 진행', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('5등(3개 일치) 테스트', async () => {
    // given
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
      [21, 22, 23, 24, 25, 26],
      [31, 32, 33, 34, 35, 36],
      [40, 41, 42, 43, 44, 45]
    ]);
    mockQuestions(['5000', '1,2,3,7,8,9', '10']);

    // when
    const app = new App();
    await app.play();

    // then
    const expectedResult = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 1,
      profit: 100
    };
    expect(Statistics.Place).toEqual(expectedResult);
  });
});
