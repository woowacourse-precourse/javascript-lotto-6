import { MissionUtils } from '@woowacourse/mission-utils';
import Statistics from '../src/Statistics';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 확률 테스트', () => {
  it('수익률 두배 테스트', async () => {
    // give
    const logSpy = getLogSpy();

    // when
    const spend = 10000;
    const winning = 20000;
    Statistics.printRateOfReturn(spend, winning);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('200.0%'));
  });
});
