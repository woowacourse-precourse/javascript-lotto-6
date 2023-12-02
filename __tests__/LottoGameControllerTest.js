import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGameController from '../src/constroller/LottoGameController.js';

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

describe('LottoGameController 클래스 테스트', () => {
  test.each([
    {
      questions: ['10000', '4,12,18,20,26,28', '37'],
      randoms: [
        [4, 18, 20, 26, 28, 37],
        [6, 12, 17, 18, 31, 44],
        [2, 15, 22, 29, 36, 41],
        [3, 7, 11, 13, 24, 40],
        [1, 5, 19, 27, 32, 38],
        [4, 10, 23, 25, 33, 42],
        [8, 16, 21, 30, 34, 45],
        [9, 14, 20, 28, 35, 43],
        [5, 17, 19, 27, 31, 39],
        [3, 13, 22, 26, 37, 41],
      ],
      expected: [
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 300,000.0%입니다.',
      ],
    },
    {
      questions: ['2000', '2,4,6,8,10,12', '14'],
      randoms: [
        [1, 3, 5, 7, 9, 11],
        [4, 8, 12, 16, 20, 24],
      ],
      expected: [
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 250.0%입니다.',
      ],
    },
  ])(
    '전체 프로그램이 제대로 작동하는지 테스트(통합 테스트)',
    async ({ questions, randoms, expected }) => {
      // given
      mockQuestions(questions);
      mockRandoms(randoms);
      const logSpy = getLogSpy();

      // when
      const lottoGame = new LottoGameController();
      await lottoGame.startGame();

      // then
      expected.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    },
  );
});
