import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import WinningLotto from '../Domain/WinningLotto.js';
import WinningJudge from '../Domain/WinningJudge.js';
import Random from '../utils/random.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // [Finished] TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const logSpy = getLogSpy();

    const random = new Random();
    random.validation([6, 2, 3, 4, 5, 6]);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 순위 리스트 계산 - second(5개 일치 && 보너스 번호 일치)', () => {
    // given
    const lottoNumbers = [3, 7, 11, 14, 17, 24];
    const winningNumbers = [4, 7, 11, 14, 17, 24];
    const bonusNumber = 3;

    const testWinner = {
      first: 0,
      second: 1,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    // when
    const testWinningLotto = new WinningLotto({ numbers: winningNumbers, bonusNumber });
    const winningJudge = new WinningJudge();

    // then // second === 1 이어야함
    expect(winningJudge.countWinner(lottoNumbers, testWinningLotto)).toEqual(testWinner);
  });

  test('당첨 금액이 맞는지 계산', () => {
    const passInput = 8000;
    const testWinner = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    };

    const winningJudge = new WinningJudge();
    expect(winningJudge.calculateRateOfReturn(testWinner, passInput)).toEqual(62.5);
  });
});
