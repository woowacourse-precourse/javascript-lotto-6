import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import { CORRECT_NUMBER } from '../src/constants/index.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const makeLottos = (array) => array.map((v) => new Lotto(v));

const makeExpectedWinningResult = (
  three,
  four,
  fiveNoBonus,
  fiveAndBonus,
  six,
) => [
  { rank: CORRECT_NUMBER.three, number: three },
  { rank: CORRECT_NUMBER.four, number: four },
  { rank: CORRECT_NUMBER.fiveNoBonus, number: fiveNoBonus },
  { rank: CORRECT_NUMBER.fiveAndBonus, number: fiveAndBonus },
  { rank: CORRECT_NUMBER.six, number: six },
];

export {
  mockQuestions,
  mockRandoms,
  getLogSpy,
  makeLottos,
  makeExpectedWinningResult,
};
