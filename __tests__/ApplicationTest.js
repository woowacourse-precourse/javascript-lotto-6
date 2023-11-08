import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { randomNum } from '../src/utils.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
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
});

describe('로또 구매 및 결과 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 구매 실패시 오류 메시지 출력 테스트', async () => {
    // 로또 구매에 실패했을 때의 메시지를 테스트합니다.
    const logSpy = getLogSpy();
    const INVALID_MONEY = '300'; // LOTTO_NUMBERS.PAY_LOTTO_MONEY로 나누어떨어지지 않는 금액

    mockRandoms([]); // 로또 번호 생성을 하지 않도록 합니다.
    mockQuestions([INVALID_MONEY]);

    const app = new App();
    await app.play();

    // 실패 메시지가 출력되었는지 검증합니다.
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('잘못된 로또 번호 입력 시 재입력 요청 테스트', async () => {
    // 잘못된 로또 번호 입력에 대해 재입력을 요청하는 것을 테스트합니다.
    const logSpy = getLogSpy();
    const VALID_MONEY = '1000';
    const INVALID_LOTTO_NUMBERS = '1,2'; // 유효하지 않은 로또 번호
    const VALID_LOTTO_NUMBERS = '1,2,3,4,5,6';
    const BONUS_NUMBER = '7';

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions([VALID_MONEY, INVALID_LOTTO_NUMBERS, VALID_LOTTO_NUMBERS, BONUS_NUMBER]);

    const app = new App();
    await app.play();

    // 올바른 로또 번호가 입력될 때까지 메시지가 출력되었는지 검증합니다.
    expect(logSpy).toHaveBeenCalledTimes(6);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('ERROR'));
  });
});
