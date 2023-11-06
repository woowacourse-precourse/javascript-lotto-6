import { MissionUtils } from '@woowacourse/mission-utils';
import { FIVE_AND_BONUS, FIVE_NO_BONUS } from '../src/constant';
import Lotto from '../src/Lotto';

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
  { rank: 'three', number: three },
  { rank: 'four', number: four },
  { rank: FIVE_NO_BONUS, number: fiveNoBonus },
  { rank: FIVE_AND_BONUS, number: fiveAndBonus },
  { rank: 'six', number: six },
];

export {
  mockQuestions,
  mockRandoms,
  getLogSpy,
  makeLottos,
  makeExpectedWinningResult,
};
