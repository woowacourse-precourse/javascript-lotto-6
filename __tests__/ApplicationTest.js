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

  test('예외 테스트', async () => {
    await runException('1000j');
  });

  test('구입 금액이 1000의 배수가 아닌 경우 예외가 발생한다', async () => {
    await runException('2500');
  });

  test('구입 금액이 1000원 이하인 경우 예외가 발생한다', async () => {
    await runException('500');
  });

  test('구입한 복권이 다 맞은 경우', async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '8개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 8개',
      '총 수익률은 200,000,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('구입한 복권이 하나도 맞지 않은 경우', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [30, 31, 32, 33, 34, 35],
      [11, 22, 23, 24, 25, 26],
      [11, 12, 23, 24, 25, 26],
      [12, 13, 24, 25, 26, 27],
    ]);
    mockQuestions(['4000', '11,12,13,14,15,16', '17']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '4개를 구매했습니다.',
      '[30, 31, 32, 33, 34, 35]',
      '[11, 22, 23, 24, 25, 26]',
      '[11, 12, 23, 24, 25, 26]',
      '[12, 13, 24, 25, 26, 27]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 0.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('복권 1개 구입 후 1등 당첨', async () => {
    const logSpy = getLogSpy();

    mockRandoms([[11, 12, 13, 14, 15, 16]]);
    mockQuestions(['1000', '11,12,13,14,15,16', '17']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '1개를 구매했습니다.',
      '[11, 12, 13, 14, 15, 16]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 200,000,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('복권 1개 구입 후 2등 당첨', async () => {
    const logSpy = getLogSpy();

    mockRandoms([[11, 12, 13, 14, 15, 17]]);
    mockQuestions(['1000', '11,12,13,14,15,16', '17']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '1개를 구매했습니다.',
      '[11, 12, 13, 14, 15, 17]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 3,000,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test('복권 1개 구입 후 3등 당첨', async () => {
    const logSpy = getLogSpy();

    mockRandoms([[11, 12, 13, 14, 15, 26]]);
    mockQuestions(['1000', '11,12,13,14,15,16', '17']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '1개를 구매했습니다.',
      '[11, 12, 13, 14, 15, 26]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 150,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test('복권 1개 구입 후 4등 당첨', async () => {
    const logSpy = getLogSpy();

    mockRandoms([[11, 12, 13, 14, 25, 26]]);
    mockQuestions(['1000', '11,12,13,14,15,16', '17']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '1개를 구매했습니다.',
      '[11, 12, 13, 14, 25, 26]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 5,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test('복권 1개 구입 후 5등 당첨', async () => {
    const logSpy = getLogSpy();

    mockRandoms([[11, 12, 13, 24, 25, 26]]);
    mockQuestions(['1000', '11,12,13,14,15,16', '17']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '1개를 구매했습니다.',
      '[11, 12, 13, 24, 25, 26]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
