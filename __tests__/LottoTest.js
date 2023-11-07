import { Random } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import ERROR from '../src/constants/error.js';
import generateLotto from '../src/utils/generateLotto.js';

const mockRandoms = numbers => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.map(number => Random.pickUniqueNumbersInRange.mockReturnValueOnce(number));
};

describe('로또 기능 테스트', () => {
  test('구매금액 만큼 로또 번호를 생성한다.', () => {
    const expectedValue = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    const recievedValue = [];
    const count = 2;
    mockRandoms(expectedValue);
    Array.from({ length: count }, () => {
      recievedValue.push(generateLotto().getNumbers());
    });
    expect(recievedValue).toStrictEqual(expectedValue);
  });
});
