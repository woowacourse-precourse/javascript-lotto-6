/* eslint-disable max-lines-per-function */
import { MissionUtils } from '@woowacourse/mission-utils';
import LottoUtill from '../../src/domain/utils/LottoUtill.js';
import OutputView from '../../src/domain/views/OutputView.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoUtill Class 테스트', () => {
  test('당첨 통계 테스트', () => {
    const Output = new OutputView();
    const lottoUtill = new LottoUtill();

    const userNumber = [[1, 2, 3, 4, 5, 6]];
    const winNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const logSpy = getLogSpy();

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    const staticObject = lottoUtill.checkLottoCorrect(
      userNumber,
      winNumber,
      bonusNumber,
    );
    Output.lottoStatic(staticObject);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('보너스 번호 테스트', () => {
    const Output = new OutputView();
    const lottoUtill = new LottoUtill();

    const userNumber = [[1, 2, 3, 4, 5, 7]];
    const winNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const logSpy = getLogSpy();

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    const staticObject = lottoUtill.checkLottoCorrect(
      userNumber,
      winNumber,
      bonusNumber,
    );
    Output.lottoStatic(staticObject);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5등,보너스 당첨 테스트', () => {
    const Output = new OutputView();
    const lottoUtill = new LottoUtill();

    const userNumber = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 10],
    ];
    const winNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 10;

    const logSpy = getLogSpy();

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    const staticObject = lottoUtill.checkLottoCorrect(
      userNumber,
      winNumber,
      bonusNumber,
    );
    Output.lottoStatic(staticObject);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
