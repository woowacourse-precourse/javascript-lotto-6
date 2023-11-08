import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto';
import LottoMachine from '../src/LottoMachine';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('계산 통계 테스트', () => {
  test('로또 당첨 상황의 출력이 정확한지 확인한다.', () => {
    //given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 10;
    const lottos = [];
    lottos.push(new Lotto([1, 2, 3, 4, 5, 6])); //1등
    lottos.push(new Lotto([1, 2, 3, 4, 5, 10])); //2등
    lottos.push(new Lotto([1, 2, 3, 11, 12, 13])); //5등
    const logSpy = getLogSpy();

    //when
    const lottoMachine = new LottoMachine(lottos, winningNumbers, bonusNumber);
    lottoMachine.printWonStats();
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 수익률의 계산이 정확한지 확인한다.', () => {
    //given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 10;
    const lottos = [];
    lottos.push(new Lotto([1, 2, 3, 4, 5, 6])); //1등
    lottos.push(new Lotto([1, 2, 3, 4, 5, 10])); //2등
    lottos.push(new Lotto([1, 2, 3, 11, 12, 13])); //5등

    //when
    const lottoMachine = new LottoMachine(lottos, winningNumbers, bonusNumber);
    const returnRate = lottoMachine.calculatReturnRate();

    //than
    expect(returnRate).toEqual((67666833.3).toString());
  });
});
