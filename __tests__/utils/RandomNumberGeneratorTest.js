import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../../src/constants/lotto';
import RandomNumberGenerator from '../../src/utils/RandomNumberGenerator.js';

describe('method : numbers() test', () => {
  const randomNumberGenerator = new RandomNumberGenerator(
    LOTTO.NUMBER_RANGE.MIN,
    LOTTO.NUMBER_RANGE.MAX,
    LOTTO.NUMBER_COUNT,
  );

  const isOverRange = (number) => {
    return !(
      number >= LOTTO.NUMBER_RANGE.MIN && number <= LOTTO.NUMBER_RANGE.MAX
    );
  };

  test('입력한 count 만큼의 숫자들이 생성되는지 확인한다.', () => {
    // given
    const numberCount = LOTTO.NUMBER_COUNT;

    // when
    // then
    const randomNumbers = new RandomNumberGenerator(
      LOTTO.NUMBER_RANGE.MIN,
      LOTTO.NUMBER_RANGE.MAX,
      numberCount,
    ).numbers();

    expect(randomNumbers).toHaveLength(numberCount);
  });

  test('생성된 random 숫자들이 유효한 범위 안의 수인지 확인한다.', () => {
    // given
    const randomNumbers = randomNumberGenerator.numbers();

    // when
    // then
    const isAllValidRangeNumber = randomNumbers.some(
      (number) => !isOverRange(number),
    );
    expect(isAllValidRangeNumber).toBe(true);
  });

  test('random 숫자들에 중복이 없는지 확인한다', () => {
    // given
    const randomNumbers = randomNumberGenerator.numbers();

    //when
    const isDuplicate = new Set(randomNumbers).size !== LOTTO.NUMBER_COUNT;

    // then
    expect(isDuplicate).toBe(false);
  });

  test('MissionUtils로 생성된 숫자가 입력한 range에 벗어나면 에러가 발생한다', () => {
    // given
    const invalidRangeNumber = Number.MAX_SAFE_INTEGER;
    const originalPickUniqueNumbersInRange = Random.pickUniqueNumbersInRange;
    Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([1, 2, 3, 4, 5, invalidRangeNumber]);

    // when
    // then
    expect(() => randomNumberGenerator.numbers()).toThrow();

    Random.pickUniqueNumbersInRange = originalPickUniqueNumbersInRange;
  });

  test('MissionUtils로 생성된 숫자가 입력한 range에 숫자형이 아닌게 있으면 에러가 발생한다', () => {
    // given
    const invalidValue = '응애나버그';
    const originalPickUniqueNumbersInRange = Random.pickUniqueNumbersInRange;

    Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([1, 2, 3, 4, 5, invalidValue]);

    // when
    // then
    expect(() => randomNumberGenerator.numbers()).toThrow();

    Random.pickUniqueNumbersInRange = originalPickUniqueNumbersInRange;
  });

  test('min, max, length가 입력되지 않았을때 lotto 도메인과 연관된 범위의 숫자를 반환한다.', () => {
    // ginve
    const randomNumberGenerator = new RandomNumberGenerator();

    // when
    const randomNumbers = randomNumberGenerator.numbers();

    // then
    expect(randomNumbers).toHaveLength(LOTTO.NUMBER_COUNT);
    expect(Math.min(...randomNumbers)).toBeGreaterThanOrEqual(
      LOTTO.NUMBER_RANGE.MIN,
    );
    expect(Math.max(...randomNumbers)).toBeLessThanOrEqual(
      LOTTO.NUMBER_RANGE.MAX,
    );
  });
});
