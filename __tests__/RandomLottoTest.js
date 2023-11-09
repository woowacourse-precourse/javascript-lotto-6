import { Random } from '@woowacourse/mission-utils';
import CalculateRandomLotto from '../src/mvc/model/calculate_random_lotto.js';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers
    .reduce((acc, number) => (
      acc.mockReturnValueOnce(number)
    ), Random.pickUniqueNumbersInRange);
};

test('무작위 로또 테스트', () => {
  mockRandoms([
    [6, 5, 4, 3, 2, 1],
    [12, 11, 10, 9, 8, 7],
  ]);
  const RANDOM_LOTTO = new CalculateRandomLotto(2).randomLotto;
  expect(RANDOM_LOTTO).toEqual([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ]);
});
