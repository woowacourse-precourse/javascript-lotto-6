import Lotto from '../src/Lotto.js';
import { LOTTO } from '../src/constants/lotto.js';

describe('Lotto 클래스 예외처리 test', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    // given
    // when
    // then
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    // given
    // when
    // then
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test.each([LOTTO.NUMBER_RANGE.MAX + 1, LOTTO.NUMBER_RANGE.MIN - 1])(
    '로또 번호에 범위 이외의 숫자가 있으면 예외가 발생한다.',
    (overRangeNumber) => {
      // given
      // when
      // then
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, overRangeNumber]);
      }).toThrow();
    },
  );

  test.each(['a', '1', true, null, undefined])(
    '로또 번호에 숫자형이 아닌 값이 있으면 예외가 발생한다.',
    (invalidTypeValue) => {
      // given
      // when
      // then
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, invalidTypeValue]);
      }).toThrow();
    },
  );
});

describe('Lotto.getNumbers 태스트', () => {
  test('생성자로 받은 로또 번호 배열과 getNumbers로 반환되는 배열을 비교했을때 메모리주소 참조가 달라야한다.', () => {
    //given
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    //when
    const result = numbers === lotto.getNumbers();

    //then
    expect(result).toBe(false);
  });

  test('sort callback을 넘겨주지 않았을때 생성된 로또 번호는 오름차순으로 만들어진 배열이여야 한다.', () => {
    //given
    const numbers = [6, 5, 4, 3, 2, 1];
    const lotto = new Lotto(numbers);

    //when
    const result = lotto.getNumbers();

    //then
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
