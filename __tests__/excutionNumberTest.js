import excutionNumber from '../src/excutionNumber.js';
import { MissionUtils } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils');

beforeEach(() => {
  MissionUtils.Random.pickUniqueNumbersInRange.mockClear();
});

describe('횟수 만큼 랜덤수 생성 테스트', () => {
  it('횟수 만큼 배열 생성 테스트', () => {
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue([
      1, 2, 3, 4, 5, 6,
    ]);
    const number = 6000;
    const result = excutionNumber(number);

    expect(result).toEqual([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ]);
  });
});
