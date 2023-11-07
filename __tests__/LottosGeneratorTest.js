import { MissionUtils } from '@woowacourse/mission-utils';
import LottosGenerator from '../src/service/LottosGenerator.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 발행 테스트', () => {
  test('구입 금액으로 로또 장수를 구한다.', () => {
    // given
    const MONEY = 9000;

    // when
    const lottosGenerator = new LottosGenerator();
    const result = lottosGenerator.getTotalIssueCount(MONEY);

    // then
    expect(result).toStrictEqual(9);
  });

  test('구입한 금액 만큼 로또를 발행한다.', () => {
    // given
    const MONEY = 4000;
    const RANDOM_NUMBERS = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 7],
      [1, 5, 6, 7, 8, 9],
      [1, 20, 30, 40, 41, 45],
    ];

    mockRandoms(RANDOM_NUMBERS);

    // when
    const lottosGenerator = new LottosGenerator(MONEY);
    const result = lottosGenerator.getLottos();

    // then
    expect(result).toHaveLength(4);
    expect(result).toStrictEqual(RANDOM_NUMBERS);
  });
});
