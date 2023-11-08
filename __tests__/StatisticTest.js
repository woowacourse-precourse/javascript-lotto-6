import { MissionUtils } from '@woowacourse/mission-utils';
import MyLotto from '../src/models/MyLotto';
import WinningLotto from '../src/models/WinningLotto';
import LottoStatistics from '../src/models/LottoStatistics';
import { MESSAGE_PRINT, MESSAGE_RESULT_STATISTICS } from '../src/constants/Message';

const mockRandoms = numbers => {
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

describe('로또 통계 테스트', () => {
  test('당첨 번호와 일치하는 개수 및 보너스 번호 일치 여부를 확인한다.', () => {
    // given
    mockRandoms([
      [1, 2, 3, 7, 8, 9],
      [1, 2, 8, 9, 10, 11],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
      [10, 11, 12, 13, 14, 15],
    ]);
    const lottoCount = 5;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const output = [
      { count: 3, bonus: true },
      { count: 2, bonus: false },
      { count: 5, bonus: true },
      { count: 6, bonus: false },
      { count: 0, bonus: false },
    ];

    // when
    const myLotto = new MyLotto(lottoCount);
    const winngLotto = new WinningLotto(winningNumbers, bonusNumber);
    const winning = winngLotto.getWinningNumbers();
    const bonus = winngLotto.getBonusNumber();
    const matchingCount = myLotto.findMatching(winning, bonus);

    // then
    expect(matchingCount).toEqual(output);
  });
  test('일치하는 개수와 보너스 번호 일치 여부로 등수를 확인한다.', () => {
    // given
    const logSpy = getLogSpy();
    const matchingResult = [
      { count: 3, bonus: true },
      { count: 2, bonus: false },
      { count: 5, bonus: true },
      { count: 6, bonus: false },
      { count: 0, bonus: false },
    ];
    const outputs = [
      MESSAGE_PRINT.STATISTICS,
      `${MESSAGE_RESULT_STATISTICS.FIFTH}1${MESSAGE_PRINT.COUNT_UNIT}`,
      `${MESSAGE_RESULT_STATISTICS.FOURTH}0${MESSAGE_PRINT.COUNT_UNIT}`,
      `${MESSAGE_RESULT_STATISTICS.THIRD}0${MESSAGE_PRINT.COUNT_UNIT}`,
      `${MESSAGE_RESULT_STATISTICS.SECOND}1${MESSAGE_PRINT.COUNT_UNIT}`,
      `${MESSAGE_RESULT_STATISTICS.FIRST}1${MESSAGE_PRINT.COUNT_UNIT}`,
    ];

    // when
    const statistics = new LottoStatistics(matchingResult);
    statistics.printLottoStatistics();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test('로또 구입 금액과 당첨금으로 수익률을 확인한다.', () => {
    // given
    const logSpy = getLogSpy();
    const matchingResult = [
      { count: 3, bonus: true },
      { count: 2, bonus: false },
      { count: 5, bonus: true },
      { count: 6, bonus: false },
      { count: 0, bonus: false },
    ];
    const output = `${MESSAGE_PRINT.TOTAL_RATE_HEAD}40,600,100${MESSAGE_PRINT.TOTAL_RATE_TAIL}`;

    // when
    const statistics = new LottoStatistics(matchingResult);
    statistics.printRateOfReturn();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
