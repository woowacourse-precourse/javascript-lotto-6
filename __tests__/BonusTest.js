import Bonus from '../src/model/Bonus';
import EXCEPTION from '../src/constant/Exception';

describe('보너스 클래스 테스트', () => {
  test.each([['1,2'], ['!'], ['@'], ['A'], ['ㄱ']])(
    '보너스 번호가 숫자로 구성되지 않은 경우 예외가 발생한다.',
    input => {
      const RESULT = () => new Bonus(input);
      expect(RESULT).toThrow(EXCEPTION.nonNumberError);
    },
  );

  test.each([[200], [50], [46]])(
    '보너스 번호가 범위 내에 포함되지 않은 경우',
    input => {
      const RESULT = () => new Bonus(input);
      expect(RESULT).toThrow(EXCEPTION.outOfRangeError);
    },
  );

  test.each([
    [[0, 1, 3, 5, 0], [3]],
    [
      [5, 1, 5, 0],
      [0, 2],
    ],
    [
      [5, 5, 5, 5],
      [0, 1, 2, 3],
    ],
    [[5, 3, 0, 0], [0]],
  ])('5가 포함된 인덱스의 위치를 제대로 반환하는가', (input, expected) => {
    const bonus = new Bonus('3');
    const RESULT = bonus.isInFive(input);
    expect(RESULT).toEqual(expected);
  });
});
