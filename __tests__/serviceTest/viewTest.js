/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';
import {
  firstPlaceOutput,
  printBuyLotto,
  printProfitRate,
  printPurchasedLottoCount,
  printWinningStatistics,
} from '../../src/services/view.js';
import { WINNING_RANK_COUNT } from '../../src/constants/lotto.js';
import Lotto from '../../src/Lotto.js';
import { ZERO } from '../../src/constants/validate.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('입출력 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구매 개수 출력 테스트', () => {
    const logSpy = getLogSpy();
    const count = 3;
    const output = `${count}개를 구매했습니다.`;
    printPurchasedLottoCount(count);
    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test('구매한 로또 번호 출력 테스트', () => {
    const logSpy = getLogSpy();
    const numbers = [1, 2, 3, 4, 5, 6];
    const lottos = [];
    const output = '[1, 2, 3, 4, 5, 6]';

    lottos.push(new Lotto(numbers));
    printBuyLotto(lottos);
    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test('당첨 통계 출력 테스트', () => {
    const logSpy = getLogSpy();
    const ranks = {
      [ZERO]: 0,
      [WINNING_RANK_COUNT.firstPlace]: 0,
      [WINNING_RANK_COUNT.secondPlace]: 0,
      [WINNING_RANK_COUNT.thirdPlace]: 0,
      [WINNING_RANK_COUNT.fourthPlace]: 0,
      [WINNING_RANK_COUNT.fifthPlace]: 1,
    };
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];
    printWinningStatistics(ranks);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('수익률 출력 테스트', () => {
    const logSpy = getLogSpy();
    const profitRate = 62.5;
    const output = `총 수익률은 ${profitRate}%입니다.`;
    printProfitRate(profitRate);
    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test('당첨 통계 출력 테스트', () => {
    const firstPlace = 1;
    const secondPlace = 2;
    const thirdPlace = 3;
    const fourthPlace = 4;
    const fifthPlace = 5;
    const ranks = {
      [WINNING_RANK_COUNT.firstPlace]: firstPlace,
      [WINNING_RANK_COUNT.secondPlace]: secondPlace,
      [WINNING_RANK_COUNT.thirdPlace]: thirdPlace,
      [WINNING_RANK_COUNT.fourthPlace]: fourthPlace,
      [WINNING_RANK_COUNT.fifthPlace]: fifthPlace,
    };

    const logSpy = getLogSpy();

    printWinningStatistics(ranks);
    const logs = [
      '3개 일치 (5,000원) - 5개',
      '4개 일치 (50,000원) - 4개',
      '5개 일치 (1,500,000원) - 3개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 2개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
