import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from '../src/Computer.js';
import Lotto from '../src/Lotto.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
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

  test('로또 결과 테스트', () => {
    const computer = new Computer();
    computer.lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([1, 8, 11, 31, 41, 42]),
      new Lotto([13, 14, 16, 38, 42, 45]),
      new Lotto([7, 11, 30, 40, 42, 43]),
      new Lotto([2, 13, 22, 32, 38, 45]),
      new Lotto([1, 3, 5, 14, 22, 45]),
    ];
    computer.winningNumbers = [1, 2, 3, 4, 5, 6];
    computer.bonusNumber = 7;

    expect(computer.getLottoResults()).toEqual([7, 0, 0, 0, 0, 1]);
  });

  test('로또 결과 출력 테스트', () => {
    const computer = new Computer();

    const mockGetLottoResults = (result) => {
      computer.getLottoResults = jest.fn();
      computer.getLottoResults.mockReturnValueOnce(result);
    };
    mockGetLottoResults([0, 1, 1, 0, 0, 3]);
    const logSpy = getLogSpy();

    computer.printLottoWinningStatistics();

    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 3개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    { input: [0, 0, 0, 0, 0, 1], expected: 5000 },
    { input: [0, 0, 0, 1, 1, 0], expected: 1550000 },
    { input: [0, 1, 0, 0, 1, 0], expected: 2000050000 },
    { input: [0, 0, 0, 0, 0, 2], expected: 10000 },
    { input: [0, 0, 1, 2, 1, 0], expected: 33050000 },
    { input: [0, 1, 1, 1, 1, 1], expected: 2031555000 },
  ])('총 상금 계산 테스트', ({ input, expected }) => {
    const computer = new Computer();
    computer.result = input;

    expect(computer.getTotalWinnings()).toEqual(expected);
  });

  test.each([
    { input: 5000, expected: '총 수익률은 6.3%입니다.' },
    { input: 10000, expected: '총 수익률은 12.5%입니다.' },
    { input: 15000, expected: '총 수익률은 18.8%입니다.' },
    { input: 1500000, expected: '총 수익률은 1,875.0%입니다.' },
    { input: 30000000, expected: '총 수익률은 37,500.0%입니다.' },
    { input: 20000000000, expected: '총 수익률은 25,000,000.0%입니다.' },
  ])('총 수익률 출력 테스트', ({ input, expected }) => {
    const computer = new Computer();

    const mockGetTotalWinnings = (result) => {
      computer.getTotalWinnings = jest.fn();
      computer.getTotalWinnings.mockReturnValueOnce(result);
    };

    mockGetTotalWinnings(input);
    const logSpy = getLogSpy();

    computer.purchaseAmount = 80000;
    computer.printTotalRateOfReturn();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});
