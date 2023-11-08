/* eslint-disable max-lines-per-function */
import { printMessage } from '../../src/common/utils.js';
import OutputView from '../../src/view/OutputView.js';
import { UTILS, LOG, STATISTICS } from '../../src/common/constants.js';

jest.mock('../../src/common/utils.js', () => ({
  printMessage: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('출력 테스트', () => {
  test('로또 개수 출력 가능 여부', () => {
    OutputView.printLottoCount(5);
    expect(printMessage).toHaveBeenCalledWith(`${UTILS.line_break}5${LOG.lotto_count}`);
  });

  test('로또 번호 출력 가능 여부', () => {
    const lottos = [
      { getNumbers: () => [1, 2, 3, 4, 5, 6] },
      { getNumbers: () => [10, 20, 30, 40, 50, 60] },
    ];
    OutputView.printLottoNumbers(lottos);
    expect(printMessage).toHaveBeenCalledWith(`[1, 2, 3, 4, 5, 6]${UTILS.line_break}[10, 20, 30, 40, 50, 60]`);
  });

  test('당첨 통계 출력 가능 여부', () => {
    const statistics = '3개 일치 (5,000원) - 1개\n4개 일치 (50,000원) - 0개';
    OutputView.printStatistics(statistics);
    expect(printMessage).toHaveBeenCalledWith(STATISTICS.winning_statistics + statistics + UTILS.line_break);
  });

  test('수익률 출력 가능 여부', () => {
    OutputView.printProfit(62.500);
    expect(printMessage).toHaveBeenCalledWith(`${STATISTICS.profit_prefix}62.5${STATISTICS.profit_postfix}`);
  });
});
