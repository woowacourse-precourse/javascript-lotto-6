import CONSTANTS from '../../../src/Lib/constans.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import WinningChecker from '../../../src/Domain/Lotto/WinningChecker.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('WinningChecker', () => {
  let winningChecker;
  let winningNumbers;
  let bonusNumber;
  let lottoList;

  beforeEach(() => {
    winningNumbers = [1, 2, 3, 4, 5, 6];
    bonusNumber = 7;
    lottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 16, 17, 28],
      [1, 2, 17, 18, 19, 20],
    ];
    winningChecker = new WinningChecker(winningNumbers);
  });

  describe('compareWinningAndLotto', () => {
    test('당첨 번호와 로또 리스트를 비교했을 때 올바른 결과 객체를 반환하는 테스트', () => {
      const result = winningChecker.compareWinningAndLotto(bonusNumber, lottoList);

      expect(result['6']).toBe(1);
      expect(result['5_bonus']).toBe(1);
      expect(result['5']).toBe(0);
      expect(result['4']).toBe(0);
      expect(result['3']).toBe(1);
    });
  });

  test('올바른 총 결과를 출력하는지에 대한 테스트', () => {
    const logSpy = getLogSpy();
    const result = {
      3: 0,
      4: 0,
      5: 5,
      '5_bonus': 0,
      6: 1,
    };

    winningChecker.printTotalResult(result);

    for (let key in result) {
      const prizeInfo = CONSTANTS.lottoPrizesMap.get(key);
      const prize = prizeInfo.prize.toLocaleString();
      const description = prizeInfo.description;
      const expectedString = `${description} (${prize}원) - ${result[key]}개`;

      expect(logSpy).toHaveBeenCalledWith(expectedString);
    }

    logSpy.mockRestore();
  });
});
