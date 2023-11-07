import { winningnum } from '../src/Game/WinningNum.js';
import { lottoprint } from '../src/Output/LottoPrint.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('당첨 관련 테스트', () => {
  // prettier-ignore
  test('당첨 기능 테스트', () => {
    //given
    const arrary = [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
    ];
    const bonusnum = { 'numbers': [1, 2, 3, 4, 5, 6], 'bonus': 7 };
    const output = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 1 };
    //when
    const result = winningnum(arrary, bonusnum);

    //then
    expect(result).toEqual(output);
  });

  test('오름차순', () => {
    //given
    const buyinput = 1;
    const RANDOM_NUMBERS_TO_END = [3, 4, 5, 2, 9, 1];
    const output = '[1, 2, 3, 4, 5, 9]';
    const logSpy = getLogSpy();
    mockRandoms([RANDOM_NUMBERS_TO_END]);
    //when
    lottoprint(buyinput);
    //then
    expect(logSpy).toHaveBeenCalledWith(output);
  });
});
