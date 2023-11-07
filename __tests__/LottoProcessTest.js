import { MissionUtils } from '@woowacourse/mission-utils';
import LottoProcess from '../src/domain/LottoProcess';
import Lotto from '../src/domain/Lotto';
import { PRINT_MESSAGES } from '../src/constant/Constants';

jest.mock('../src/domain/Lotto');

describe('xp', () => {
  let lottoProcess;
  const spyOnUserLottoNumbers = jest.spyOn(
    LottoProcess.prototype,
    'getUserLottoNumbers',
  );

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
});
