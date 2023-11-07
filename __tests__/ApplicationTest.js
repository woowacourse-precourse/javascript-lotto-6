import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { checkbonus } from '../src/Exception/CheckBonus.js';
import { checkbuy } from '../src/Exception/CheckBuy.js';
import { checkduplication } from '../src/Exception/Checkduplication.js';
import { winningnum } from '../src/Game/WinningNum.js';
import { lottoprint } from '../src/Output/LottoPrint.js';

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

  // prettier-ignore
  test('당첨 기능 테스트', () => {
    //given
    const arrary = [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
    ];
    const bonusnum = { 'numbers': [1, 2, 3, 4, 5, 6], 'bonus': 7 };
    const output = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 1 };
    //when
    const result = winningnum(arrary, bonusnum);

    //then
    expect(result).toEqual(output);
  });

  test('오름차순', () => {
    //given
    const buyinput = 1;
    const RANDOM_NUMBERS_TO_END = [3, 4, 5, 2, 9, 1];
    const output = '[1, 2, 3, 4, 5, 9]';
    const logSpy = getLogSpy();
    mockRandoms([RANDOM_NUMBERS_TO_END]);
    //when
    lottoprint(buyinput);
    //then
    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      checkbonus('60');
    }).toThrow('[ERROR]');
  });

  test('금액은 1000원 단위의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      checkbuy('1001');
    }).toThrow('[ERROR]');
  });

  // prettier-ignore
  test('당첨 번호와 보너스 번호가 일치하면 예외가 발생한다.', () => {
    expect(() => {
      checkduplication({ 'numbers': [1, 2, 3, 4, 5, 6]},5);
    }).toThrow('[ERROR]');
  });
});
