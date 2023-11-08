import LottoGame from '../Controller/LottoGame.js';
import { Console, Random } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 게임 컨트롤러 메소드 테스트.', () => {
  let lottoGame = 0;
  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test('insertMoney 메소드 테스트.', async () => {
    const insertMoney = ['10000'];
    const expectedResult = '10000';
    mockQuestions(insertMoney);
    const testResult = await lottoGame.insertMoney();
    expect(testResult).toEqual(expectedResult);
  });

  test('getPurchasedAmount 메소드 테스트.', () => {
    const insertedMoney = 8000;
    const expectedResult = 8;
    const testResult = lottoGame.getPurchasedAmount(insertedMoney);
    expect(testResult).toEqual(expectedResult);
  });

  test('createLottoNumber 메소드 테스트.', async () => {
    const userInput = ['1,2,3,4,5,6'];
    const expectedResult = [1, 2, 3, 4, 5, 6];
    mockQuestions(userInput);
    const testResult = await lottoGame.createLottoNumber();
    expect(testResult).toEqual(expectedResult);
  });

  test('createBonusNumber 메소드 테스트.', async () => {
    const userInput = ['10'];
    const expectedResult = 10;
    mockQuestions(userInput);
    const testResult = await lottoGame.createBonusNumber();
    expect(testResult).toEqual(expectedResult);
  });

  test('calculateGameResult 메소드 테스트.', async () => {
    const purchasedNumbers = [
      [1, 2, 3, 4, 5, 6],
      [10, 11, 12, 13, 14, 15],
      [1, 2, 3, 10, 11, 20],
    ];
    const lottoNumber = [1, 2, 3, 10, 11, 12];
    const bonusNumber = 20;
    const expectedResult = {
      winResultBoard: { three: 2, four: 0, five: 0, fiveBonus: 1, six: 0 },
      profitPercent: '1000333.3',
    };

    const testResult = lottoGame.calculateGameResult(
      purchasedNumbers,
      lottoNumber,
      bonusNumber,
      purchasedNumbers.length
    );

    expect(testResult).toEqual(expectedResult);
  });
});

describe('로또 게임 컨트롤러 테스트.', () => {
  test('play 메소드 테스트.', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [10, 11, 12, 13, 14, 15],
      [20, 21, 22, 23, 24, 25],
      [30, 31, 32, 33, 34, 35],
      [40, 41, 42, 43, 44, 45],
    ]);
    mockQuestions(['5000', '1,2,3,20,21,22', '45']);

    const lottoGame = new LottoGame();
    await lottoGame.play();

    const logs = [
      '5개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[10, 11, 12, 13, 14, 15]',
      '[20, 21, 22, 23, 24, 25]',
      '[30, 31, 32, 33, 34, 35]',
      '[40, 41, 42, 43, 44, 45]',
      '3개 일치 (5,000원) - 2개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 200.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
