import { run } from 'jest';
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', input];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('보너스 번호 입력 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('당첨 번호와 겹치는 경우 예외 발생', async () => {
    await runException('5');
  });

  test('1~45 범위에 해당하지 않는 숫자를 입력할 경우 예외 발생', async () => {
    await runException('46');
  });

  test('숫자가 아닌 문자를 입력하면 예외 발생', async () => {
    await runException('a');
  });
});
