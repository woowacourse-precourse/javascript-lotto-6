import { Random } from '@woowacourse/mission-utils';

import getRandomNumber from '../src/Utils/getRandomNumber';
import { LOTTO_INFO } from '../src/Utils/constants';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(() => [1, 2, 3, 4, 5, 6]),
  },
}));

describe('getRandomNumber', () => {
  test('랜덤 숫자의 올바른 생성 확인.', () => {
    const expectedRandomNumbers = [1, 2, 3, 4, 5, 6];

    const result = getRandomNumber();

    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(
      LOTTO_INFO.MIN_NUMBER,
      LOTTO_INFO.MAX_NUMBER,
      LOTTO_INFO.LENGTH,
    );

    expect(result).toEqual(expectedRandomNumbers);
  });
});
