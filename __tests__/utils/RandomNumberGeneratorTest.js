import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../../src/constants/lotto';
import RandomNumberGenerator from '../../src/utils/RandomNumberGenerator.js';

describe('method : numbers() test', () => {
  let randomNumberGenerator;
  const isOverRange = (number) =>
    !(number >= LOTTO.NUMBER_RANGE.MIN && number <= LOTTO.NUMBER_RANGE.MAX);

  beforeEach(() => {
    randomNumberGenerator = new RandomNumberGenerator(
      LOTTO.NUMBER_RANGE.MIN,
      LOTTO.NUMBER_RANGE.MAX,
      LOTTO.NUMBER_COUNT,
    );
  });

  test('입력한 count 만큼의 숫자들이 생성되는지 확인한다.', () => {
    const randomNumbers = randomNumberGenerator.numbers();

    expect(randomNumbers).toHaveLength(LOTTO.NUMBER_COUNT);
  });

  test('생성된 random 숫자들이 유효한 범위 안의 수인지 확인한다.', () => {
    const randomNumbers = randomNumberGenerator.numbers();
    const isAllValidRangeNumber = randomNumbers.some(
      (number) => !isOverRange(number),
    );

    expect(isAllValidRangeNumber).toBe(true);
  });

  test('random 숫자들에 중복이 없는지 확인한다', () => {
    const randomNumbers = randomNumberGenerator.numbers();
    const isDuplicate = new Set(randomNumbers).size !== LOTTO.NUMBER_COUNT;

    expect(isDuplicate).toBe(false);
  });

  test('MissionUtils로 생성된 숫자가 입력한 range에 벗어나면 에러가 발생한다', () => {
    const invalidRangeNumber = Number.MAX_SAFE_INTEGER;
    const originalPickUniqueNumbersInRange = Random.pickUniqueNumbersInRange;
    Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([1, 2, 3, 4, 5, invalidRangeNumber]);

    expect(() => randomNumberGenerator.numbers()).toThrow();

    Random.pickUniqueNumbersInRange = originalPickUniqueNumbersInRange;
  });

  test('MissionUtils로 생성된 숫자가 입력한 range에 숫자형이 아닌게 있으면 에러가 발생한다', () => {
    const invalidValue = '응애나버그';
    const originalPickUniqueNumbersInRange = Random.pickUniqueNumbersInRange;
    Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([1, 2, 3, 4, 5, invalidValue]);

    expect(() => randomNumberGenerator.numbers()).toThrow();

    Random.pickUniqueNumbersInRange = originalPickUniqueNumbersInRange;
  });
});
