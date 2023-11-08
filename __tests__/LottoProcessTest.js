import { MissionUtils } from '@woowacourse/mission-utils';
import LottoProcess from '../src/domain/LottoProcess.js';
import Lotto from '../src/Lotto.js';

jest.mock('../src/Lotto.js');

describe('xp', () => {
  let lottoProcess;

  const getSpyOnConsolePrint = () => {
    const spyOnConsolePrint = jest.spyOn(MissionUtils.Console, 'print');
    spyOnConsolePrint.mockClear();
    return spyOnConsolePrint;
  };

  test('생성한 로또 인스턴스의 번호 반환 테스트', () => {
    lottoProcess = new LottoProcess();
    Lotto.prototype.getNumbers = jest.fn(() => [1, 2, 3, 4, 5, 6]);

    const result = lottoProcess.getUserLottoNumbers(1);

    expect(result).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  test('로또 생성 테스트', () => {
    const spyOnConsolePrint = getSpyOnConsolePrint();
    const inputs = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8],
    ];

    const logs = [
      '3개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[2, 3, 4, 5, 6, 7]',
      '[3, 4, 5, 6, 7, 8]',
    ];
    LottoProcess.prototype.getUserLottoNumbers = jest.fn(() => inputs);
    lottoProcess = new LottoProcess();
    lottoProcess.money = '3000';

    lottoProcess.generateUserLottos();

    logs.forEach((log) => {
      expect(spyOnConsolePrint).toHaveBeenCalledWith(
        expect.stringContaining(log),
      );
    });
  });

  describe('로또 당첨 순위 확인 테스트', () => {
    const accordList = [2, 1, 0, 3, 3, 0, 0, 5, 5, 6];
    beforeEach(() => {
      lottoProcess = new LottoProcess();
      lottoProcess.lottos = [
        [1, 3, 11, 38, 43, 45],
        [4, 25, 26, 39, 44, 45],
        [8, 10, 11, 19, 28, 30],
        [1, 4, 5, 31, 36, 43],
        [1, 5, 6, 11, 13, 19],
        [7, 8, 21, 37, 39, 42],
        [10, 11, 23, 32, 38, 41],
        [1, 2, 3, 4, 5, 12],
        [1, 2, 3, 4, 5, 11],
        [1, 2, 3, 4, 5, 6],
      ];
    });
    test('당첨 개수 테스트', () => {
      lottoProcess.winningNumbers = '1,2,3,4,5,6';

      const result = lottoProcess.checkAccord();

      expect(result).toEqual(accordList);
    });

    test('맞춘 개수로 당첨 순위 반환 테스트', () => {
      lottoProcess.bonusNumber = 12;
      const ranklist = [
        'nothing',
        'nothing',
        'nothing',
        'fifth',
        'fifth',
        'nothing',
        'nothing',
        'second',
        'third',
        'first',
      ];
      const result = lottoProcess.checkRanking(accordList);

      expect(result).toEqual(ranklist);
    });
  });
});
