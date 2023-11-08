import { ERROR } from '../src/constant/index.js';
import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호 6개를 반환한다.', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(data);
    expect(lotto.getNumbers()).toEqual(data);
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.LOTTO_NUMBERS.LENGTH);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.LOTTO_NUMBERS.UNIQE);
  });

  test.each([[[0, 1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, 46]]])(
    '로또 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다. (numbers: %s)',
    numbers => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow(ERROR.LOTTO_NUMBER_RANGE);
    }
  );
});
