import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/domains/Lotto.js';
import { EXCEPTION } from '../src/constants/constants.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(EXCEPTION.LOTTO_MUST_SIX_NUMBERS);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(EXCEPTION.LOTTO_DUPLICATE);
  });

  test('로또 번호가 1~45까지의 정수가 아니면 에러 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 500]);
    }).toThrow(EXCEPTION.LOTTO_MUST_IN_RANGE);
  });

  test('6자리 로또 번호 생성 테스트(오름차순 정렬)', () => {
    const RANDOM_NUMBERS = [1, 3, 5, 2, 4, 6];
    mockRandoms([RANDOM_NUMBERS]);

    const input = Lotto.buyLotto();
    const output = new Lotto(input).getLotto();
    expect(output).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
