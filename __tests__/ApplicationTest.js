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
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

const runExceptionByInput = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...input]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

const checkRank = async (amount, randoms, logs) => {
  // given
  const logSpy = getLogSpy();

  mockRandoms(randoms);
  mockQuestions([amount, '1,2,3,4,5,6', '7']);

  // when
  const app = new App();
  await app.play();

  // then
  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기능 테스트', async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트 - 0개 일치', async () => {
    const randoms = [[8, 9, 10, 11, 12, 13]];
    const logs = [
      '1개를 구매했습니다.',
      '[8, 9, 10, 11, 12, 13]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 0.0%입니다.',
    ];

    await checkRank('1000', randoms, logs);
  });

  test('기능 테스트 - 3개 일치', async () => {
    const percent = ((5000 / 1000) * 100).toFixed(1);
    const randoms = [[1, 2, 3, 11, 12, 13]];
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 11, 12, 13]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      `총 수익률은 ${percent}%입니다.`,
    ];

    await checkRank('1000', randoms, logs);
  });

  test('기능 테스트 - 4개 일치', async () => {
    const percent = ((50000 / 1000) * 100).toFixed(1);
    const randoms = [[1, 2, 3, 4, 12, 13]];
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 12, 13]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      `총 수익률은 ${percent}%입니다.`,
    ];

    await checkRank('1000', randoms, logs);
  });

  test('기능 테스트 - 5개 일치', async () => {
    const percent = ((1500000 / 1000) * 100).toFixed(1);
    const randoms = [[1, 2, 3, 4, 5, 13]];
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 13]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      `총 수익률은 ${percent}%입니다.`,
    ];

    await checkRank('1000', randoms, logs);
  });

  test('기능 테스트 - 5개 일치, 보너스 볼 일치', async () => {
    const percent = ((30000000 / 1000) * 100).toFixed(1);
    const randoms = [[1, 2, 3, 4, 5, 7]];
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 7]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      `총 수익률은 ${percent}%입니다.`,
    ];

    await checkRank('1000', randoms, logs);
  });

  test('기능 테스트 - 6개 일치', async () => {
    const percent = ((2000000000 / 1000) * 100).toFixed(1);
    const randoms = [[1, 2, 3, 4, 5, 6]];
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      `총 수익률은 ${percent}%입니다.`,
    ];

    await checkRank('1000', randoms, logs);
  });

  test('기능 테스트 - 중복 당첨(5개 일치 + 5개 일치, 보너스볼 일치)', async () => {
    const percent = (((1500000 + 30000000) / 2000) * 100).toFixed(1);
    const randoms = [
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 5, 7],
    ];
    const logs = [
      '2개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 8]',
      '[1, 2, 3, 4, 5, 7]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      `총 수익률은 ${percent}%입니다.`,
    ];

    await checkRank('2000', randoms, logs);
  });

  test('예외 테스트 - 구입 금액이 숫자가 아닌 경우', async () => {
    await runException('1000j');
  });

  test.each(['100', '2001', '0'])(
    '예외 테스트 - 구입 금액이 1000원 단위가 아닌 경우',
    async (input) => {
      await runException(input);
    }
  );

  test('예외 테스트 - 당첨 번호가 숫자로 이루어지지 않은 경우', async () => {
    await runExceptionByInput(['1000', '1,2,3,4,5,a', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 - 당첨 번호가 6개가 아닌 경우', async () => {
    await runExceptionByInput(['1000', '1,2,3,4,5', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 - 당첨 번호가 1부터 45사이의 숫자가 아닌 경우', async () => {
    await runExceptionByInput(['1000', '1,2,3,4,5,99', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 - 당첨 번호에 중복된 숫자가 있는 경우', async () => {
    await runExceptionByInput(['1000', '1,2,3,4,5,5', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 - 보너스 번호가 숫자가 아닌 경우', async () => {
    await runExceptionByInput(['1000', '1,2,3,4,5,5', '1,2,3,4,5,6', 'a', '7']);
  });

  test('예외 테스트 - 보너스 번호가 1부터 45 사이의 숫자가 아닌 경우', async () => {
    await runExceptionByInput([
      '1000',
      '1,2,3,4,5,5',
      '1,2,3,4,5,6',
      '66',
      '7',
    ]);
  });

  test('예외 테스트 - 보너스 번호가 당첨 번호와 중복되는 경우', async () => {
    await runExceptionByInput(['1000', '1,2,3,4,5,6', '6', '7']);
  });
});
