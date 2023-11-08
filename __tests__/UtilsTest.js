import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getInputPurchasingMoney,
  getInputWinningNumbers,
  getInputBonusNumber,
  printPurchasedAmount,
  printProfit,
  printRankingList,
} from '../src/util/Utils.js';

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

describe('입력 테스트', () => {
  const purchasingMoney = ['1010', '1000j', 'asdf', '999', '$123', '1000'];
  const winningNumbers = [
    '1,2,3,4,5,5',
    'a,2,3,4,5',
    '333,1,2,3,4,5',
    '1,2,3,4,5,6',
  ];
  const bonusNumber = ['99', 'aa', '$%', '0', '7'];

  test('로또 구매 금액이 잘못된 입력 값이면 재질문 후 입력 받아야 함.', async () => {
    mockQuestions(purchasingMoney);

    await getInputPurchasingMoney();

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(6);
  });

  test('당첨 번호가 잘못된 입력 값이면 재질문 후 입력 받아야 함.', async () => {
    mockQuestions(winningNumbers);

    await getInputWinningNumbers();

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(4);
  });

  test('보너스 번호가 잘못된 입력 값이면 재질문 후 입력 받아야 함.', async () => {
    mockQuestions(bonusNumber);

    await getInputBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(5);
  });
});

describe('print 테스트', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });
  test('구매 로또 출력 테스트', () => {
    const amount = 6;
    const lottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
    ];
    const logs = [
      '6개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
    ];

    printPurchasedAmount(amount, lottos);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('이익률 출력 테스트', () => {
    const rankAmount = [5, 0, 1, 0, 0, 0];

    printProfit(rankAmount);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('833.3%'));
  });

  test('랭킹 리스트 출력 테스트', () => {
    const rankingList = [
      'nothing',
      'nothing',
      'nothing',
      'fifth',
      'nothing',
      'fourth',
    ];
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 916.7%입니다.',
    ];

    printRankingList(rankingList);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
