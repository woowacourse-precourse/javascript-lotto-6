import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../src/controller/LottoGame.js';
import { ERROR } from '../src/constants/Constant.js';

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
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 게임 클래스 테스트', () => {
  test.each([
    {
      question: ['1000', '1,2,3,4,5,6', '7'],
      random: [[1, 2, 3, 9, 10, 11]],
      logs: [
        '1개를 구매했습니다.',
        '[1, 2, 3, 9, 10, 11]',
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 500.0%입니다.',
      ],
    },
    {
      question: ['5000', '7,18,19,26,33,45', '37'],
      random: [
        [1, 2, 3, 9, 10, 11],
        [6, 20, 23, 24, 28, 30],
        [12, 19, 21, 29, 40, 45],
        [4, 18, 31, 37, 42, 43],
        [11, 21, 22, 30, 29, 44],
      ],
      logs: [
        '5개를 구매했습니다.',
        '[1, 2, 3, 9, 10, 11]',
        '[6, 20, 23, 24, 28, 30]',
        '[12, 19, 21, 29, 40, 45]',
        '[4, 18, 31, 37, 42, 43]',
        '[11, 21, 22, 29, 30, 44]',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 0.0%입니다.',
      ],
    },
    {
      question: ['6000', '1,2,3,4,5,6', '7'],
      random: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 4, 5, 8],
        [1, 2, 3, 4, 8, 9],
        [1, 2, 3, 8, 9, 10],
        [1, 2, 8, 9, 10, 11],
      ],
      logs: [
        '6개를 구매했습니다.',
        '[1, 2, 3, 4, 5, 6]',
        '[1, 2, 3, 4, 5, 7]',
        '[1, 2, 3, 4, 5, 8]',
        '[1, 2, 3, 4, 8, 9]',
        '[1, 2, 3, 8, 9, 10]',
        '[1, 2, 8, 9, 10, 11]',
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 1개',
        '5개 일치 (1,500,000원) - 1개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
        '6개 일치 (2,000,000,000원) - 1개',
        '총 수익률은 33,859,250.0%입니다.',
      ],
    },
  ])('게임이 제대로 작동하는 경우 테스트', async ({ question, random, logs }) => {
    // given
    const logSpy = getLogSpy();
    mockRandoms(random);
    mockQuestions(question);

    // when
    const lottoGame = new LottoGame();
    await lottoGame.startGame();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('금액을 다시 입력받는 경우 테스트', async () => {
    // given
    const question = ['유나', '0', '500', '1000', '1,2,3,4,5,6', '7'];
    const random = [[1, 2, 3, 9, 10, 11]];
    const logs = [
      `${ERROR.isNotNumber}`,
      `${ERROR.isNotPositive}`,
      `${ERROR.isNotInAmountUnit}`,
      '1개를 구매했습니다.',
      '[1, 2, 3, 9, 10, 11]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500.0%입니다.',
    ];

    const logSpy = getLogSpy();
    mockRandoms(random);
    mockQuestions(question);

    // when
    const lottoGame = new LottoGame();
    await lottoGame.startGame();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨 번호를 다시 입력받는 경우 테스트', async () => {
    // given
    const question = [
      '1000',
      '1,2,3,4,5',
      '1,2,3,4,5,유나',
      '100,0,1,2,3,4',
      '1,1,2,2,3,3',
      '1,2,3,4,5,6',
      '7',
    ];
    const random = [[1, 2, 3, 9, 10, 11]];
    const logs = [
      `${ERROR.isInvalidCount}`,
      `${ERROR.hasNonNumericElements}`,
      `${ERROR.hasOutOfRange}`,
      `${ERROR.hasDuplicate}`,
      '1개를 구매했습니다.',
      '[1, 2, 3, 9, 10, 11]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500.0%입니다.',
    ];

    const logSpy = getLogSpy();
    mockRandoms(random);
    mockQuestions(question);

    // when
    const lottoGame = new LottoGame();
    await lottoGame.startGame();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('보너스 번호를 다시 입력받는 경우 테스트', async () => {
    // given
    const question = ['1000', '1,2,3,4,5,6', '유나!', '-30', '100', '6', '7'];
    const random = [[1, 2, 3, 9, 10, 11]];
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 9, 10, 11]',
      `${ERROR.isNotNumber}`,
      `${ERROR.isNotPositive}`,
      `${ERROR.isOutOfRange}`,
      `${ERROR.hasDuplicate}`,
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500.0%입니다.',
    ];

    const logSpy = getLogSpy();
    mockRandoms(random);
    mockQuestions(question);

    // when
    const lottoGame = new LottoGame();
    await lottoGame.startGame();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
