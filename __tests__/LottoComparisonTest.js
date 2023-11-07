import LottoComparison from '../src/domains/LottoComparison';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoComparison 클래스 테스트', () => {
  test('로또 번호를 당첨 번호와 보너스 번호와 비교하여 결과를 출력한다.', async () => {
    // Arrange
    const logSpy = getLogSpy();

    const myLotto = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    const winningLottoMachine = {
      winningNumbers: [1, 2, 3, 10, 11, 12],
      bonusNumber: 7,
    };

    const outputs = [
      '\n당첨 통계\n---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 250%입니다.',
    ];
    // Act
    new LottoComparison(myLotto, winningLottoMachine).run();
    // Assert
    outputs.forEach((output) => expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output)));
  });
});
